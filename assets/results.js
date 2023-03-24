// var aboutMovieBtn = document.getElementById("movieInfo");
var showFoodBtn = document.getElementById("showFood");

// function showMovieInfo (aboutMovieBtn){
    
// }

// aboutMovieBtn.addEventListener("click", )

function showFoodOptions(showFoodBtn) {
// add yelp code here so that button takes user to the yelp API
}

showFoodBtn.addEventListener("click", showFoodOptions);

// when the user clicks the "Show Me Options" button under food results, they are taken top the yelp page 

var movie = document.querySelector("movie-placeholder");
var btn = document.querySelector("button")

btn.onclick=function() {
    if (movie.style.display=="none") {
        movie.style.display== "block"
    } else {
        movie.style.display=="none"
    }
}