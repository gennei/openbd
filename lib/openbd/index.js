let request = require('request');
let url = 'https://api.openbd.jp/v1';

openBD = function() {};

openBD.prototype.get = function(isbns, callback) {
  if (Array.isArray(isbns)) {
    isbns = isbns.join(',');
  }
  request(url + `/get?isbn=${isbns}`, callback);
};

openBD.prototype.coverage = function(callback) {
  request(url + `/coverage`, callback);
};

openBD.prototype.schema = function(callback) {
  request(url + `/schema`, callback);
};
