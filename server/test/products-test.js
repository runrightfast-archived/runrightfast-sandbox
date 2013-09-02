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

'use strict';

var expect = require('chai').expect;

var productService = require('../lib/products')();

describe('Products API Unit Tests', function() {
	it('can be used to retrieve all products', function() {
		var response = null;
		
		var request = {
			query : {},
			reply : function(x){
				response = x;
			}
		};

		productService.getProducts(request);
		expect(response).to.exist;
		expect(response.length).to.be.above(0);
	});

});
