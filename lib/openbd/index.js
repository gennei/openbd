let request = require('request');
let url = 'https://api.openbd.jp/v1';

OpenBD = function() {};

OpenBD.prototype.get = function(isbns, callback) {
  if (Array.isArray(isbns)) {
    isbns = isbns.join(',');
  }
  request(url + `/get?isbn=${isbns}`, callback);
};

OpenBD.prototype.coverage = function(callback) {
  request(url + `/coverage`, callback);
};

OpenBD.prototype.schema = function(callback) {
  request(url + `/schema`, callback);
};
