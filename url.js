var CLIP_PREFIX = "http://cl.ip/";
var URL_PREFIX = "http://www.";
var urls = new Object();

function shortenURL(){
	// Get user input without http:// part
	var longUrl = $('#longURL').val().replace(URL_PREFIX,"");

	//hash the remaining part using md5
	var hashedValue = CryptoJS.MD5(longUrl);

	var shortUrl = CLIP_PREFIX + hashedValue;

	// save url to map for expanding
	urls[shortUrl] = longUrl;

	// display it to the user
	$("#shortenedUrl").text("Shortened URL: "+ shortUrl);
}

function expandURL(){
	// Get user input 
	var shortUrl = $('#shortURL').val();

	if (shortUrl in urls){
		var longUrl = URL_PREFIX + urls[shortUrl];
		$("#expandedUrl").text("Expanded URL: " + longUrl);
	}
	else {
		$("#expandedUrl").text("This URL was not previously shortened.");
	}
}