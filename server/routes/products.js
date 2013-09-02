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

var Types = require('hapi').types;

var products = require('../lib/products')();

module.exports = [ {
	method : 'GET',
	path : '/products',
	config : {
		handler : products.getProducts,
		validate : {
			query : {
				name : Types.String()
			}
		}
	}
}, {
	method : 'GET',
	path : '/products/{id}',
	config : {
		handler : products.getProduct
	}
}, {
	method : 'POST',
	path : '/products',
	config : {
		handler : products.addProduct,
		payload : 'parse',
		validate : {
			payload : {
				name : Types.String().required().min(3)
			}
		}
	}
} ];
