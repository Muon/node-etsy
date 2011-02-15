var Etsy = require('etsy').Etsy;

var API_KEY = process.env.OAUTH_CONSUMER_KEY;

var etsy = new Etsy(API_KEY);

etsy.findAllListingActive(
	{
		keywords: 'blue shawl',
		limit: 10,
		fields: 'title',
		includes: 'MainImage(url_75x75)'
	},
	function(err, data) {
		if(err)
		{
			throw err;
		}
		
		console.log(data);
	}
);
