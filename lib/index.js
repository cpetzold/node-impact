exports.weltmeister = require('./weltmeister');
exports.listen = function(server, options) {
  exports.weltmeister.listen(server);
};