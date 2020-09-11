const tfIdf = require("../lib/tfIdf")

const main = async () => {
  const path = require('path');
  const filePath = path.join(__dirname, "data/cv.pdf");
  const result = await tfIdf.getTermsFromPdfByPath(filePath);
  console.log(result);
}

main();






