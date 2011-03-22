var express = require('express'),
    impact = require('impact');
  
var server = express.createServer();

server.configure(function(){
  server.set('views', __dirname + '/views');
  server.use(express.methodOverride());
  server.use(express.bodyParser());
  server.use(server.router);
});

server.get('/', function(req, res){
  res.render('index.jade', {
    locals: { title: 'Example node-impact server' }
  });
});

var im = impact.listen(server, { root: __dirname + '/public' });
server.use(express.static(im.root));

server.listen(8080);