/*	
	By Philipp Werminghausen
	10/25/2014
	philipp.werminghausen@gmail.com
	
	-What for: forces the client & server to fetch a file again, instead of using a already cached version.
	-Support: ECMAScript 3rd Edition (IE6+,FF1+,chrome,safari)
	-Use: returns a random integer.
		Ex. var file = 'my.url.com/file.txt?_=' + cachebuster();
*/
function cachebuster(){
	return (Math.random()+'').replace(/\./,'')
}