/**
 * Copyright [2013] [runrightfast.co]
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

var Hapi = require('hapi');
var routes = require('./routes');

var server = function() {
	'use strict';

	var configureServerEventListeners = function(server) {
		server.on('log', function(event, tags) {
			console.log(event);
		});
	};

	var configureTv = function(server) {
		var tvOptions = {
			webSocketPort : 3000,
			debugEndpoint : '/debug/console',
			queryKey : 'debug'
		};
		server.pack.require('tv', tvOptions, function(err) {

			if (!err) {
				server.log([ 'info', 'tv' ], 'Loaded plugin');
			} else {
				server.log([ 'error', 'tv' ], 'Failed loading plugin: '
						+ err.message);
			}
		});
	};

	var configureLout = function(server) {
		server.pack.require({
			lout : {
				endpoint : '/docs'
			}
		}, function(err) {

			if (err) {
				console.log('Failed loading plugins');
			}
		});
	};

	var config = {};
	var server = new Hapi.Server('0.0.0.0', 8080, config);
	configureLout(server);
	configureTv(server);

	configureServerEventListeners(server);

	server.addRoutes(routes);

	server.start(function() {
		server.log([ 'info' ], 'server started at : ' + server.info.uri);
	});

};

server();