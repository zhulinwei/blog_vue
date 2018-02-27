
const koa = require('koa');
const path = require('path');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');

const app = new koa();
const PORT = process.env.PORT;
const router = require('./route');
const { mongo } = require('./db');

app.use(bodyParser());
app.use(static(path.join(__dirname, '../dist')));

// console.log(mongo);
// mongo.init()
//   .then(data => {
//     console.log(data);
//     // 注意：require('./router')必须要在mongo.init()之后，否则model中无法获取到db
//     // const router = require('./router');
//     // app.use(router.routes());
//     // app.use(router.allowedMethods());
//     // router(app);
//     app.listen(PORT);
//     console.log('blog_vue running at ' + 'http://127.0.0.1:' + PORT);
//   })
//   .catch(err => {
//     console.log(err);
//   });
