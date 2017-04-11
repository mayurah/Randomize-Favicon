function __favicon(_favicon_url){
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = _favicon_url;
    document.getElementsByTagName('head')[0].appendChild(link);
}



// Sample random test
var _test = true;
var favicons_array = [ '//www.stackoverflow.com/favicon.ico',
		  '//news.ycombinator.com/favicon.ico' ];

setInterval(function(){ shuffle(favicons_array); __favicon(favicons_array[]) }, 1000);


