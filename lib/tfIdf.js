const pdfToText = require("./pdfToText")
const natural = require('natural');
const TfIdf = natural.TfIdf;


module.exports = {
  async getTermsFromPdfByPath (path) {
    const rawPdfText = await pdfToText.extractPdfByPath(path)
    const pdfText = pdfToText.cleansePdfText(rawPdfText);

    const tfidf = new TfIdf();
    tfidf.addDocument(pdfText);
    return tfidf.listTerms(0);
  }
}
