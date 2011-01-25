node-impact
===========

### Getting it

npm install impact

### Implementing it

The node-impact module allows impact to run on a node http server.  It binds to an express server, setting up the routes for the Weltmeister api calls.

See the example for usage.  In that particular example, the impact game lives in public/.
    
This will set up the following Weltmeister api routes (of which need to be changed in weltmeister/config.js):

    'api': {
  		'save': 'wm/save',
  		'browse': 'wm/browse',
  		'glob': 'wm/glob'
  	}