var scraper = require('../lib/scraper');

scraper('http://www.w3schools.com/jsref/jsref_replace.asp', function(err, $, a, b) {
	if (err) {throw err;}

	$('p').each(function( i, o) {
		console.log( $(o).html()+'\n');
    });
});