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
module.exports = function(grunt) {
	'use strict';
	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		jslint : {
			server : {
				src : [ 'server/routes/*.js', 'server/*.js',
						'server/test/*.js' ],
				directives : {
					node : true,
					todo : true,
					white : true,
					vars : true,
					predef : ['describe','it']
				},
				options : {
					log : 'out/server-lint.log',
					jslintXml : 'out/server-jslint.xml',
					errorsOnly : true,
					failOnError : false
				}
			}
		},
		mochacov : {
			coverage : {
				options : {
					reporter : 'html-cov',
					output : "out/coverage.html"
				}
			},
			test : {
				options : {
					reporter : 'spec',
					coverage : true
				}
			},
			options : {
				files : 'server/test/*.js'
			}
		},
		clean : [ 'out' ]
	});

	grunt.loadNpmTasks('grunt-jslint');
	grunt.loadNpmTasks('grunt-mocha-cov');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('test', [ 'mochacov:coverage' ]);

	// Default task(s).
	grunt.registerTask('default', [ 'clean', 'jslint', 'test' ]);

};
