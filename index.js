import dotenv from 'dotenv';
import { createReadStream, createWriteStream } from 'fs';
import logger from './src/logger.js';
import {
   getFilePathAndName, isInputFilePathExists, isOutputFormatIsHtml,
   getJsonObj, createOutputFolder, getFilePathAndNameFromOptions
} from './src/utility.js';
import { transformCSVToJSON, transformJSONToHTML } from './src/transforms.js';
import { OUTPUT_DIR_NAME, HTML_FORMAT } from './src/constants.js';

dotenv.config();
export default class MarketDataParser {
   constructor(options) {
      this.inputFileObj = options ? getFilePathAndNameFromOptions(options) : getFilePathAndName(process.argv);
      this.requiredFormat = options?.outputFormat ?? process.env.OUTPUT_FORMAT;
   }

   async CSVTORequiredFomat() {
      if (isInputFilePathExists(this.inputFileObj)) {
         try {
            const readStream = createReadStream(this.inputFileObj.path, 'utf8')
               .on('data', () => logger.info('File Read successfully'))
               .on('error', err => logger.info('Failed to Read file,', err));

            const csvTojson = readStream.pipe(transformCSVToJSON());

            if (isOutputFormatIsHtml(this.requiredFormat)) {
               createOutputFolder();
               const writeStream = createWriteStream(`${OUTPUT_DIR_NAME}/${this.inputFileObj.name}.${HTML_FORMAT}`)
                  .on('finish', () => logger.info('File Writing Done'))
                  .on('error', err => logger.error('Failed to Write file', err));
               csvTojson.pipe(transformJSONToHTML).pipe(writeStream);
            } else {
               const jsonObj = await getJsonObj(csvTojson);
               logger.info('JSON object returned successfully');
               return jsonObj;
            }
         } catch (err) {
            logger.error('Error occured in CSV to required format', err);
         }
      } else {
         logger.warn('Filepath is required.');
      }
   }
}
