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

function displayRandomFood() {
fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=los%20angeles&term=restaurants&sort_by=best_match&limit=20', {
  headers: {
    'authorization': 'Bearer qiVkS2AtN-9RfaGsoAkYDuGbU670y4KSsS-7S8FGrgu3Vq1aqXFWkDiOsN3zdoZHWTei9BkR3sOB2mVJvz-zPJcdqJ1YXXmvINS3Zd-aULBDROgRZ55M1CdMsuUgZHYx'
  }
})
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
  var randomFood = data.businesses[Math.floor(Math.random() *19)]; 
  /* console.log("***",randomFood); */
  localStorage.setItem("random-food", JSON.stringify(randomFood));
  var food = document.getElementById("food-options");
  // code to display the retrieved data
});
}
function displayResults() {
  var randomFood = JSON.parse(localStorage.getItem('random-food'));
  console.log(randomFood);
  var businesses = document.createElement('h4');
  var businessImage = document.createElement('img');
  var foodResultEl = document.querySelector('.food-options');
  businesses.textContent=randomFood.name;
  businessImage.setAttribute('src',randomFood.image_url); 
  foodResultEl.append(businesses);
  foodResultEl.append(businessImage);
  }

  displayRandomFood();
  displayResults();

