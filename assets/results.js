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
    var businesses = data.businesses;
    var randomBusinesses = [];
    for (var i = 0; i < 3; i++) {
      var randomIndex = Math.floor(Math.random() * businesses.length);
      randomBusinesses.push(businesses[randomIndex]);
      businesses.splice(randomIndex, 1);
    }
    localStorage.setItem("random-businesses", JSON.stringify(randomBusinesses));
  });
}

function displayResults() {
  var randomBusinesses = JSON.parse(localStorage.getItem('random-businesses'));
  console.log(randomBusinesses);
  var foodResultEl = document.querySelector('.food-options');
  for (var i = 0; i < randomBusinesses.length; i++) {
    var business = randomBusinesses[i];
    var businesses = document.createElement('h4');
    var businessImage = document.createElement('img');
    businesses.textContent = business.name;
    businessImage.setAttribute('src', business.image_url); 
    foodResultEl.append(businesses);
    foodResultEl.append(businessImage);
  }
}

displayRandomFood();
displayResults();
