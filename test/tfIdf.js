const tfIdf = require("../lib/tfIdf")
const path = require('path');
const fs = require("fs");

const test = async () => {
  const filePath = path.join(__dirname, "data/cv.pdf");
  const result = await tfIdf.getTermsFromPdfByPath(filePath);
  console.log(result);
}

const test2 = async () => {
  const dirPath = path.join(__dirname, "data");
  const result = await tfIdf.getTermsFromPdfsByPath(dirPath);

  const json = JSON.stringify(result);

  const resultFile = path.join(__dirname, "result/tfIdf.json")
  fs.writeFile(resultFile, json, function(err) {
    if (err) throw err;
    console.log('complete');
  });
}

const test3 = async () => {
  const dirPath = path.join(__dirname, "data");
  const {documents, tfidf} = await tfIdf.getTfIdfFromPdfsByPath(dirPath);
  tfidf.tfidfs(
    [
      'java'
    ],
    function(i, measure) {
    console.log(documents[i] + ' is ' + measure);
  });
}

// test();
// test2();
test3();





