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
  overview.textContent = randomMovie.overview;

  // poster image like this as well? or does image need special elements
  // will have to concat the poster image with base url

  var posterurl = 'https://image.tmdb.org/t/p/original/';

  var completePosterUrl = posterurl.concat(randomMovie.poster_path);
  poster.setAttribute('src', completePosterUrl);
  movieResultEl.append(title, overview, poster);
}
displayRandomMovie();
