var suggestionsContainer = document.querySelector("#suggestions-container");
var moodBtns = document.querySelector("#mood-selection");
// var moodButton = document.querySelector("#mood-button");
// moodButton.addEventListener("click", onMoodButtonClick);

function onMoodButtonClick() {
    // Get the user's mood input here and save it to a variable
    var mood = "happy"; // for example

    // Add event listeners to mood buttons
    document.getElementById("happy-btn").addEventListener("click", () => {
        getMovieSuggestions("happy");
    });

    document.getElementById("sad-btn").addEventListener("click", () => {
        getMovieSuggestions("sad");
    });

    document.getElementById("excited-btn").addEventListener("click", () => {
        getMovieSuggestions("excited");
    });

    document.getElementById("angry-btn").addEventListener("click", () => {
        getMovieSuggestions("angry");
    });

    document.getElementById("idk-btn").addEventListener("click", () => {
        getMovieSuggestions("idk");
    });

    // Call the TMDB API to get movie suggestions
    var genreId = "10751"; // Replace this with the ID of the genre you want to search for
    fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbApiKey}&with_genres=${genreId}`
    )
        .then((response) => response.json())
        .then((data) => {
            // Display the movie suggestions in the suggestions container
            var movieSuggestions = data.results
                .slice(0, 3)
                .map((movie) => movie.title);
            suggestionsContainer.innerHTML += "<h2>Movie Suggestions</h2>";
            suggestionsContainer.innerHTML += `<ul>${movieSuggestions
                .map((suggestion) => `<li>${suggestion}</li>`)
                .join("")}</ul>`;
        })
        .catch((error) => {
            console.error(error);
        });
}

var foodURL=`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=los%20angeles&term=restaurants&sort_by=best_match&limit=20`
function getFoodURl() {
    fetch(foodURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var foodArray = data.businesses;
            // console.log(foodArray);
            var randomFood =
                foodArray[Math.floor(Math.random() * foodArray.length)];
            localStorage.setItem("random-food", JSON.stringify(randomFood));
            // where to put items
            // how to put IN results html
        });
}
