require('../lib/openbd');
let openbd = new OpenBD();

/*
 * 1件だけ取得
 */
openbd.get('4088810023', function(err, response, body) {
  console.log(body);
});

/*
 * 複数件取得
 */
openbd.get(new Array('4088810023', '4088725093'), function(err, response, body) {
  console.log(body);
});
