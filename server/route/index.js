const api = require('./api');
const Boom = require('boom');

module.exports = function(app) {
  app.use(api.routes());
  app.use(api.allowedMethods({
    throw: true,
    notImplemented: () => new Boom.notImplemented(),
    methodNotAllowed: () => new Boom.methodNotAllowed()
  }));
}