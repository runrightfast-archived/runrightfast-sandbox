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

module.exports = function() {
	'use strict';

	var products = [ {
		id : 1,
		name : 'Guitar'
	}, {
		id : 2,
		name : 'Banjo'
	} ];

	var findProducts = function(name) {
		return products.filter(function(product) {
			return product.name.toLowerCase() === name.toLowerCase();
		});
	};

	var getProducts = function(request) {
		if (request.query.name) {
			request.reply(findProducts(request.query.name));
		} else {
			request.reply(products);
		}
	};

	var getProduct = function(request) {

		var product = products.filter(function(p) {
			return p.id === parseInt(request.params.id, 10);
		}).pop();

		request.reply(product);
	};

	var addProduct = function(request) {

		var product = {
			id : products[products.length - 1].id + 1,
			name : request.payload.name
		};

		products.push(product);

		request.reply(product).code(201).header(
				'Location,: /products/' + product.id);
	};

	return {
		getProducts : getProducts,
		findProducts : findProducts,
		getProduct : getProduct,
		addProduct : addProduct
	};
};
