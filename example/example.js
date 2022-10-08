const openbd = require('../');

/*
 * 1件だけ取得
 */
openbd.get('4088810023').then(res=>{
  console.log(res.data);
});

/*
 * 複数件取得
 */
openbd.get(new Array('4088810023', '4088725093')).then(res=>{
  console.log(res.data);
  console.log(res.data.length);
});
/**
 * 全件ISBN
 */
openbd.coverage().then(res=>{
  console.log(res.data)
});