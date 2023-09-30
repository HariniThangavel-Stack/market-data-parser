# MARKET-DATA-PARSER

MARKET-DATA-PARSER can parse the given CSV file and convert the content into HTML or JSON using streams.

---

## Installation 

MARKET-DATA-PARSER requires [Node.js](https://nodejs.org/) v10+ to run.

Using npm:
```sh
$ npm install market-data-parser
```
Using yarn:
```sh
$ yarn install market-data-parser
```
## Usage

To use this module, pass the input options such as .csv FILEPATH and desired OUTPUT FORMAT( HTML or JSON, by default it returns JSON ).

Input can be given in two ways

1. Passing as options to marketDataParser class
```js
    import marketDataParser from 'market-data-parser';
    const options = {
        outputFormat: 'json',    // 'html' -> create an html file in output folder
        filePath: '<your filepath>'
    };
    const output = await new marketDataParser(options).CSVTORequiredFomat();
```
2. Using Command Line
```
    npm start -- filepath <your filepath>  

    and set OUTPUT_FORMAT= 'json' or OUTPUT_FORMAT= 'html' inside .env file 
```

## Contributors

- Harini Thangavel <harinithangavel04@gmail.com>

---
