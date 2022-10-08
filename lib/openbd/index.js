let axios = require('axios');
let url = 'https://api.openbd.jp/v1';

openBD = function() {};

openBD.prototype.get = function(isbns) {
  if (Array.isArray(isbns)) {
    isbns = isbns.join(',');
  }
  return axios.get(url + `/get?isbn=${isbns}`);
};

openBD.prototype.coverage = function() {
  return axios.get(url + `/coverage`);
};

openBD.prototype.schema = function() {
  return axios.get(url + `/schema`);
};
