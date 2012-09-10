node-impact
===========

### Getting it

npm install impact-fork

### Implementing it

The node-impact module allows impact to run on a node http server.  It binds to an express server, setting up the routes for the Weltmeister api calls.

This will set up the following Weltmeister api routes (of which need to be changed in weltmeister/config.js):

    'api': {
  		'save': 'wm/save',
  		'browse': 'wm/browse',
  		'glob': 'wm/glob'
  	}

The game directory is an incomplete example version of an impact game. To use impact, you will need to:

1. Copy the tools/, media/ and lib/ directories from impact.js library into game/public/

Your new folder structure will look like this:
<pre>-node-impact
|-game
 |-public
  |-css
  |-style.css
  |-lib
  |-media
  |-tools
 |-views
  |-index.jade
  |-layout.jade
  |-welmeister.jade
 |-server.js
 |-lib
 |-index.js
 |-weltmeister.js
|-package.json
|-readme.md (this file)</pre>

2. Open up a terminal and move into the node-impact/game directory
3. Issue the command "node server.js"
4. Open a web browser and browse to "http://localhost:8080/"
5. If you are starting with a fresh copy of impact, you will simpley see a black square with the words "It Works!" inside


    



