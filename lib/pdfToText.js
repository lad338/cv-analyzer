const extract = require('pdf-text-extract');
module.exports = {
   async extractPdfByPath(filePath) {
    return new Promise( (resolve, reject) => {
      extract(filePath, (err, pages) => {
        if (err) { return reject (err); }
        resolve(pages);
      });
    })
  },
  cleansePdfText (extractedPdfText) {
     let result = extractedPdfText;
     if (Array.isArray(extractedPdfText)) {
       result = extractedPdfText.join(' ');
     }
     result = result.replace(/\s\s+/g, ' ');
     return result;
  }
}
