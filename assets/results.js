// function to display a random movie 
function displayRandomMovie() {
  // get the randomly selected movie from local storage and parse the JSON data
  var randomMovie = JSON.parse(localStorage.getItem('random-movie'));
  console.log(randomMovie);

  // create elements for title, overview, and poster image
  var title = document.createElement('h3');
  var overview = document.createElement('p');
  var poster = document.createElement('img');

  // select the element where the movie result will be displayed
  var movieResultEl = document.querySelector('.moviePicks');

  // set the text content of the title element to the title of the random movie
  title.textContent = randomMovie.title;
  console.log(title);

  // set the text content of the overview element to the overview of the random movie
  // with quotation marks around the text
  overview.textContent = '"' + randomMovie.overview + '"';

  // create the URL for the poster image by concatenating the base URL with the poster path
  var posterurl = 'https://image.tmdb.org/t/p/original/';
  var completePosterUrl = posterurl.concat(randomMovie.poster_path);

  // set the source attribute of the poster element to the complete poster URL
  poster.setAttribute('src', completePosterUrl);

  // append the title, overview, and poster elements to the movie result element
  movieResultEl.append(title, overview, poster);
}

displayRandomMovie();

function displayRandomFood() {

// function to display random food suggestions
function displayRandomFood() {
  // use fetch to get data from Yelp API
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

    // get an array of businesses from the Yelp data
    var businesses = data.businesses;
    // create an array for randomly selected businesses
    var randomBusinesses = [];
    // loop through 3 times to get 3 random businesses
    for (var i = 0; i < 3; i++) {
      // get a random index within the length of the businesses array
      var randomIndex = Math.floor(Math.random() * businesses.length);
      // add the randomly selected business to the random businesses array
      randomBusinesses.push(businesses[randomIndex]);
      // remove the randomly selected business from the businesses array
      businesses.splice(randomIndex, 1);
    }
    // store the randomly selected businesses in local storage as a JSON string
  main
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

// function to display the random food suggestions
function displayResults() {
  // get the randomly selected businesses from local storage and parse the JSON data
  var randomBusinesses = JSON.parse(localStorage.getItem('random-businesses'));
  console.log(randomBusinesses);

  // select the element where the food options will be displayed
  var foodResultEl = document.querySelector('.food-options');
  // Loop through each random business and display their name and image on the page
for (var i = 0; i < randomBusinesses.length; i++) {
  var business = randomBusinesses[i];
  
  // Create new <h4> and <img> elements for each business
  var businesses = document.createElement('h4');
  var businessImage = document.createElement('img');
  
  // Set the text content of the <h4> element to the business name
  businesses.textContent = business.name;
  
  // Set the source attribute of the <img> element to the business image URL
  businessImage.setAttribute('src', business.image_url); 
  
  // Append the <h4> and <img> elements to the foodResultEl container element
  foodResultEl.append(businesses);
  foodResultEl.append(businessImage);
}

// Call the displayRandomFood() and displayResults() functions
displayRandomFood();
displayResults();

}

