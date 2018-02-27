const Router = require('koa-router');
const router = new Router();
const { Menu, Acticle, Comment } = require('../ctrl');

router.prefix('/api');

router.get('/users/login', async (ctx) => {
  ctx.body = 'Hello World';
})

router.get('/acticles/special', async (ctx) => {
  ctx.body = 'Hello World';
});

router.get('/acticles/special', async (ctx) => {
  ctx.body = 'Hello World';
});

router.get('/acticles/:id', async (ctx) => {
  ctx.body = 'Hello World';
});

router.get('/menus', async (ctx) => {
  ctx.body = 'Hello World';
});

router.get('/comment', async (ctx) => {
  ctx.body = 'Hello World';
});

router.post('/comment', async (ctx) => {
  ctx.body = 'Hello World';
});

module.exports = router;
