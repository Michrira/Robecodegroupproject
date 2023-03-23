var happyBtn = $('#happy-btn');
var sadBtn = $('#sad-btn');
var excitedBtn = $('#excited-btn');
var angryBtn = $('#angry-btn');
var idkBtn = $('#idk-btn');

var happyArray = ["16", "35", "10751", "10770" ];
var sadArray = ["18", "14", "10402", "10749"];
var excitedArray = ["28", "12", "53", "9648"];
var angryArray = ["27", "99", "10752", "80"];
var idkArray = ["28", "12", "16", "35", "80", "99", "18", "10751", "14", "36", "27", "10402", "9648", "10749", "878", "10770", "53", "10752", "37"];

var requestURL = "https://api.themoviedb.org/3/discover/movie?api_key=7a5e1c0d82259f941772e1baf73aad08&with_original_language=en&with_genres=";

if (happyBtn.clicked == true) {
    //randomy pick 1 from happy
    var randomItem = happyArray[Math.floor(Math.random()*happyArray.length)];
    var genreURl= requestURL.concat(randomItem);
}
else if (sadBtn is clicked) {
    //randomy pick 1 from sad
    var randomItem = sadArray[Math.floor(Math.random()*sadArray.length)];
    var genreURl= requestURL.concat(randomItem);
}
else if (excitedBtn is clicked){
    //randomy pick 1 from excited
    var randomItem = excitedArray[Math.floor(Math.random()*excitedArray.length)];
    var genreURl= requestURL.concat(randomItem);
} else if (angryBtn is clicked) {
    //randomy pick 1 from happy
    var randomItem = angryArray[Math.floor(Math.random()*angryArray.length)];
    var genreURl= requestURL.concat(randomItem);
} else {
    //randomy pick 1 from idk
    var randomItem = idkArray[Math.floor(Math.random()*idkArray.length)];
    var genreURl= requestURL.concat(randomItem);
} 
function genreURl
fetch(genreURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

    // where to put items

    var title = document.createElement('h3');
    var overview = document.createElement('p');
    var poster = document.createElement()

    
    title.textContent = data[i].title;
    // overview with click button
    overview.textContent = data[i].overview;
    // poster image like this as well? or does image need special elements
    // will have to concat the poster image with base url
    poster.textContent = data[i].poster;
    var posterurl = "https://image.tmdb.org/t/p/original/"
    var completePosterUrl = posterurl.concat("poster_path url in api")

