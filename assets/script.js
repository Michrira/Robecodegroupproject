// yelp API key
var yelpApiKey = "ByTr1g12x5fWKcXeF8ifzkIZt_9MQb-76N6n-DxZyzx66ZudR53Z5Ez2TJ7MBktodnsmcVoiXqBdAing0k7BrGeJRA1yw4vTiwrofTx9m9k3clHgkhg3BV-IMsAcZHYx";
var tmdbApiKey = "5d63f52510b97ed689fb70d1b4978c73";

//restaurants API

const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.yelp.com/v3/businesses/search?categories=&categories=restaurants&sort_by=best_match&limit=20', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

var suggestionsContainer = document.querySelector("#suggestions-container");
var moodButton = document.querySelector("#mood-button");
moodButton.addEventListener("click", onMoodButtonClick);

function onMoodButtonClick() {
  // Get the user's mood input here and save it to a variable
  var mood = "happy"; // for example

  // Add event listeners to mood buttons
document.getElementById('happy-btn').addEventListener('click', () => {
    getMovieSuggestions('happy');
});

document.getElementById('sad-btn').addEventListener('click', () => {
    getMovieSuggestions('sad');
});

document.getElementById('excited-btn').addEventListener('click', () => {
    getMovieSuggestions('excited');
});

document.getElementById('angry-btn').addEventListener('click', () => {
    getMovieSuggestions('angry');
});

document.getElementById('idk-btn').addEventListener('click', () => {
    getMovieSuggestions('idk');
});

  // Call the Yelp API to get food suggestions
fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Los%20Angeles&sort_by=best_match&limit=3&term=${mood}`, {
    headers: {
    "Authorization": `Bearer ${yelpApiKey}`
    }
})
.then(response => response.json())
.then(data => {
    // Display the food suggestions in the suggestions container
    const foodSuggestions = data.businesses.map(business => business.name);
    suggestionsContainer.innerHTML += "<h2>Food Suggestions</h2>";
    suggestionsContainer.innerHTML += `<ul>${foodSuggestions.map(suggestion => `<li>${suggestion}</li>`).join("")}</ul>`;
})
.catch(error => {
    console.error(error);
});

  // Call the TMDB API to get movie suggestions
  var genreId = "10751"; // Replace this with the ID of the genre you want to search for
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbApiKey}&with_genres=${genreId}`)
.then(response => response.json())
.then(data => {
    // Display the movie suggestions in the suggestions container
    var movieSuggestions = data.results.slice(0, 3).map(movie => movie.title);
    suggestionsContainer.innerHTML += "<h2>Movie Suggestions</h2>";
    suggestionsContainer.innerHTML += `<ul>${movieSuggestions.map(suggestion => `<li>${suggestion}</li>`).join("")}</ul>`;
})
.catch(error => {
    console.error(error);
});
}

  // Call the displayRandomQuestion function when the user selects their mood
var moodSelector = document.getElementById("mood-selector");
moodSelector.addEventListener("change", displayRandomQuestion);

