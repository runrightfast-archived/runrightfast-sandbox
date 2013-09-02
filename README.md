runrightfast-sandbox
====================

Sandbox project used for experimentation and POC purposes

Project Structure:
==================
/node_modules
 - standard location where local npm modules are installed

/out
 - where output files are placed when running grunt tasks

/server
 - contains all server side code

/server/lib
 - contains server specific library modules

/server/routes
 - contains modules that define hapi routes
 - the routes files should reference handlers that are defined within modules - either in /server/lib or /node_modules
 
/test
 - contains test code
 
/routes.js
 - aggregates all routes that will be registered with hapi
 
/server.js
 - configures and starts up a hapi server

