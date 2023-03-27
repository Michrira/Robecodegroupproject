function displayRandomMovie() {
  var randomMovie = JSON.parse(localStorage.getItem('random-movie'));
  console.log(randomMovie);
  var title = document.createElement('h3');
  var overview = document.createElement('p');
  var poster = document.createElement('img');

  var movieResultEl = document.querySelector('.moviePicks');

  title.textContent = randomMovie.title;
  console.log(title);
  // overview with click button
  overview.textContent = '"' + randomMovie.overview + '"';

  // poster image like this as well? or does image need special elements
  // will have to concat the poster image with base url

  var posterurl = 'https://image.tmdb.org/t/p/original/';

  var completePosterUrl = posterurl.concat(randomMovie.poster_path);
  poster.setAttribute('src', completePosterUrl);
  movieResultEl.append(title, overview, poster);
}
displayRandomMovie();
function displayRandomFood(){

fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=los%20angeles&term=restaurants&sort_by=best_match&limit=20', {
  headers: {
    'authorization': 'Bearer ByTr1g12x5fWKcXeF8ifzkIZt_9MQb-76N6n-DxZyzx66ZudR53Z5Ez2TJ7MBktodnsmcVoiXqBdAing0k7BrGeJRA1yw4vTiwrofTx9m9k3clHgkhg3BV-IMsAcZHYx'
  }
})
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
  var food = document.getElementById("food-options");
  // code to display the retrieved data
});
}
function displayRandomFood() {
  var randomFood = JSON.parse(localStorage.getItem('random-food'));
  console.log(randomFood);
  var businesses = document.createElement('h4');

  var foodResultEl = document.querySelector('.randomFood');
  businesses.textContent=randomFood.businesses.name;
  foodResultEl.append(businesses);
  }

  displayRandomFood();