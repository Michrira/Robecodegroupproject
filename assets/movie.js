var happyBtn = document.querySelector('#happy-btn');
var sadBtn = document.querySelector('#sad-btn');
var excitedBtn = document.querySelector('#excited-btn');
var angryBtn = document.querySelector('#angry-btn');
var idkBtn = document.querySelector('#idk-btn');

var happyArray = ["16", "35", "10751", "10770"];
var sadArray = ["18", "14", "10402", "10749"];
var excitedArray = ["28", "12", "53", "9648"];
var angryArray = ["27", "99", "10752", "80"];
var idkArray = ["28", "12", "16", "35", "80", "99", "18", "10751", "14", "36", "27", "10402", "9648", "10749", "878", "10770", "53", "10752", "37"];

var randomItem = "";
var genreURl = "";

var requestURL = "https://api.themoviedb.org/3/discover/movie?api_key=7a5e1c0d82259f941772e1baf73aad08&with_original_language=en&with_genres=";

var moodBtns = document.querySelector('#mood-selection');
console.log(moodBtns)

moodBtns.addEventListener('click', clickedButton)

function clickedButton(event) {
    event.preventDefault();
    console.log(event.target)

    var element = event.target
    if (element.matches("button")) {
        var buttonType = element.getAttribute("id")
        console.log(buttonType)

        if (buttonType === "happy-btn") {
            //randomy pick 1 from happy
            randomItem = happyArray[Math.floor(Math.random() * happyArray.length)];
            genreURl = requestURL.concat(randomItem);
        }
        else if (buttonType === "sad-btn") {
            //randomy pick 1 from sad
            randomItem = sadArray[Math.floor(Math.random() * sadArray.length)];
             genreURl = requestURL.concat(randomItem);
            console.log(randomItem)
            console.log(genreURl)
        }
        else if (buttonType === "excited-btn") {
            //randomy pick 1 from excited
            randomItem = excitedArray[Math.floor(Math.random() * excitedArray.length)];
             genreURl = requestURL.concat(randomItem);
        } else if (buttonType === "angry-btn") {
            //randomy pick 1 from happy
             randomItem = angryArray[Math.floor(Math.random() * angryArray.length)];
            genreURl = requestURL.concat(randomItem);
        } else {
            //randomy pick 1 from idk
             randomItem = idkArray[Math.floor(Math.random() * idkArray.length)];
             genreURl = requestURL.concat(randomItem);
        }
        getMovieURl()
    }
}

function getMovieURl() {
    fetch(genreURl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
    var movieArray = data.results
    console.log(movieArray)
    var randomMovie = movieArray[Math.floor(Math.random()*movieArray.length)]
    localStorage.setItem("random-movie",JSON.stringify(randomMovie))
        // where to put items
        // how to put IN results html
       
})
}