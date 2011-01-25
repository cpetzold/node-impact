exports.weltmeister = require('./weltmeister');
exports.listen = function(server, options) {
  return exports.weltmeister.listen(server, options);
};