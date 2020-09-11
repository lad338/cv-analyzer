const extract = require('pdf-text-extract');
module.exports = {
   async extractPdfByPath(filePath) {
    return new Promise( (resolve, reject) => {
      extract(filePath, (err, text) => {
        if (err) { return reject (err); }
        resolve(text);
      });
    })
  }
}
