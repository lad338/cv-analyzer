console.log("Test Main");

const path = require('path');

const filePath = path.join(__dirname, 'data/data_analyst_CV_template.pdf');

const extract = require('pdf-text-extract');

extract(filePath, function (err, pages) {
  if (err) {
    console.dir(err)
    return
  }
  console.dir(pages)
})


