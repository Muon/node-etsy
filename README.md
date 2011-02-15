# Overview

A client library to the [Etsy API](http://developer.etsy.com/) for [Node.js](http://nodejs.org/). Supports both read-only and read-write (OAuth) calls.

# Installation

	npm install etsy

# Usage

	var Etsy = require('etsy').Etsy;
	
	var api = new Etsy(CONSUMER_KEY, SHARED_SECRET); // note: shared secret is not required if you are not using the OAuth API

## Public call

	// see the developer docs for method names
	api.getListing({
		listing_id: foo,
		fields: ['title', 'price']
	}, function(err, listing) {
		console.log(listing.results[0]);
	});

## Private call

	api.getRequestToken('http://www.example.com/verify', function(err, token) {
		// store the request token somewhere
		redirect(token.login_url + '?oauth_consumer_key=' + token.oauth_consumer_key + '&oauth_token=' token.oauth_token);
	});

	api.getAccessToken(
		request_token, // get the request token stored earlier
		oauth_verifier, // get the verifier you got at http://www.example.com/verify
		function(err, token) {
			api.updateListing({ listing_id: foo, renew: true }, token, function(err, listing) {
				console.log(listing.results[0]);
			});
		}
	);

# License

The MIT License

Copyright (c) 2011 Mak Nazečić-Andrlon (owlberteinstein@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

