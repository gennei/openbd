let axios = require('axios');
let url = 'https://api.openbd.jp/v1';



function get(isbns) {
  if (Array.isArray(isbns)) {
    isbns = isbns.join(',');
  }
  return axios.get(url + `/get?isbn=${isbns}`);
};

function coverage() {
  return axios.get(url + `/coverage`);
};

function schema() {
  return axios.get(url + `/schema`);
};

module.exports = {
  get,coverage,schema
};