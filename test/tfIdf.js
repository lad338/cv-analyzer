const natural = require('natural');
const TfIdf = natural.TfIdf;
const tfidf = new TfIdf();

tfidf.addDocument('this document is about node. a fat cat is dancing in the kitchen');
// console.log('node --------------------------------');
// tfidf.tfidfs('node', function(i, measure) {
//   console.log('document #' + i + ' is ' + measure);
// });
//
// console.log('ruby --------------------------------');
// tfidf.tfidfs('ruby', function(i, measure) {
//   console.log('document #' + i + ' is ' + measure);
// });
//
// console.log('node --------------------------------');
// tfidf.tfidfs('node', function(i, measure) {
//   console.log('document #' + i + ' is ' + measure);
// });


console.log(tfidf.listTerms(0));
