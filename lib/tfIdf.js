const pdfToText = require("./pdfToText")
const natural = require('natural');
const TfIdf = natural.TfIdf;

const path = require('path');
const fs = require("fs");


module.exports = {
  async getTermsFromPdfByPath (path) {
    const rawPdfText = await pdfToText.extractPdfByPath(path)
    const pdfText = pdfToText.cleansePdfText(rawPdfText);

    const tfidf = new TfIdf();
    tfidf.addDocument(pdfText);
    return tfidf.listTerms(0);
  },

  async getTermsFromPdfsByPath (dirPath) {
    return new Promise( (resolve, reject) => {
      fs.readdir(dirPath, async function (err, files) {

        if (err) {
          console.log('Unable to scan directory: ' + err);
          reject(err);
        }

        const result = {};

        for (const file of files) {
          if (path.extname(file) === ".pdf") {
            console.log("Processing " + file);
            const filePath = path.join( dirPath, file);
            result[file] = await module.exports.getTermsFromPdfByPath(filePath);
          }
        }
        resolve(result);
      });
    });
  },

  async getTfIdfFromPdfsByPath (dirPath) {
    return new Promise((resolve, reject) => {
      fs.readdir(dirPath, async function (err, files) {

        if (err) {
          console.log('Unable to scan directory: ' + err);
          reject(err);
        }

        const tfidf = new TfIdf();
        const documents = [];
        for (const file of files) {
          if (path.extname(file) === ".pdf") {
            console.log("Processing " + file);
            const filePath = path.join( dirPath, file);
            const rawPdfText = await pdfToText.extractPdfByPath(filePath)
            const pdfText = pdfToText.cleansePdfText(rawPdfText);
            documents.push(file);
            tfidf.addDocument(pdfText);
          }
        }
        resolve({documents, tfidf});
      });
    });
  }

}
