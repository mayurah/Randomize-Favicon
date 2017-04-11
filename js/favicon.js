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

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

setInterval(function(){ shuffle(favicons_array); __favicon(favicons_array[0]) }, 1000);


