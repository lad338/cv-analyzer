console.log("Test PdfToText");

const pdfToText = require("../lib/pdfToText")

const path = require('path');
const filePath = path.join(__dirname, "data/cv.pdf");

const test = async () => {
  const result = await pdfToText.extractPdfByPath(filePath);
  console.log(result);
}

test();


