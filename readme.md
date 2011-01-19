node-impact
===========

### Getting it

npm install impact

### Implementing it

The node-impact module allows impact to run on a node http server.  It binds to an express server, setting up the routes for the Weltmeister api calls.

Here is a sample server.js (inlcuded in a directory with the impact game in /public):

    var express = require('express'),
        impact = require('impact');
      
    var server = express.createServer();

    server.configure(function(){
        server.use(express.methodOverride());
        server.use(express.bodyDecoder());
        server.use(server.router);
        server.use(express.staticProvider(__dirname + '/public'));
    });

    server.get('/', function(req, res){
      res.send('hello world');
    });

    impact.listen(server);
    server.listen(8080);
    
This will set up the following Weltmeister api routes (of which need to be changed in weltmeister/config.js):

    'api': {
  		'save': 'wm/save',
  		'browse': 'wm/browse',
  		'glob': 'wm/glob'
  	}