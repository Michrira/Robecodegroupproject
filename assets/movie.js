// Selecting DOM elements
var happyBtn = document.querySelector('#happy-btn');
var sadBtn = document.querySelector('#sad-btn');
var excitedBtn = document.querySelector('#excited-btn');
var angryBtn = document.querySelector('#angry-btn');
var idkBtn = document.querySelector('#idk-btn');
var questionContainer = document.getElementById('food-container');
var foodSuggestions = document.querySelector('#get-food-btn');

// Movie genre arrays
var happyArray = ['16', '35', '10751', '10770'];
var sadArray = ['18', '14', '10402', '10749'];
var excitedArray = ['28', '12', '53', '9648'];
var angryArray = ['27', '99', '10752', '80'];
var idkArray = [
  '28',
  '12',
  '16',
  '35',
  '80',
  '99',
  '18',
  '10751',
  '14',
  '36',
  '27',
  '10402',
  '9648',
  '10749',
  '878',
  '10770',
  '53',
  '10752',
  '37',
];

// API request URL and related variables
var randomItem = '';
var genreURl = '';
var requestURL =
  'https://api.themoviedb.org/3/discover/movie?api_key=7a5e1c0d82259f941772e1baf73aad08&with_original_language=en&with_genres=';

// Available questions and current question variables for the food suggestions section
var availableQuestions = {};
var currentQuestion = {};
var MAX_QUESTIONS = 2;

// Shuffle function to randomly display questions based on selected mood
function shuffle(array) {
  questions = '';
  // Loop through the movie genre arrays to display random questions based on selected mood
  for (var count = 0; count < MAX_QUESTIONS; count++) {
    randomItem = array[Math.floor(Math.random() * array.length)];
    displayRandomQuestion(randomItem);
  }
  // Add HTML code for food selection options
  questionContainer.innerHTML =
    `<h2>Are you Vegan/ Vegetarian?</h2>
    <select id="food-selection">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="I dont know">I dont know</option>
    </select>
    ` + questions;
}


// Function to display a random question
function displayRandomQuestion(question) {
  // Display the random question on the page
  questions += `<h2>${question.question}</h2>
    <select id="food-selection">
        <option value="${question.choice1}">${question.choice1}</option>
        <option value="${question.choice2}">${question.choice2}</option>
        <option value="${question.choice3}">${question.choice3}</option>
    </select>
    `;
}

// Function to get a random movie from the given array
function getRandomMovie(array) {
  randomItem = array[Math.floor(Math.random() * array.length)];
  genreURl = requestURL.concat(randomItem);
}

// Function to handle button click events
function clickedButton(event) {
  event.preventDefault();

  var element = event.target;
  if (element.matches('button')) {
    var buttonType = element.getAttribute('id');

    // Clear question container
    questionContainer.innerHTML = '';

    // Determine which button was clicked and shuffle the corresponding array
    if (buttonType === 'happy-btn') {
      shuffle(questionsHappy);
      getRandomMovie(questionsHappy);
    }
    if (buttonType === 'sad-btn') {
      shuffle(questionsSad);
      getRandomMovie(questionsSad);
    }
    if (buttonType === 'excited-btn') {
      shuffle(questionsExcited);
      getRandomMovie(questionsExcited);
    }
    if (buttonType === 'angry-btn') {
      shuffle(questionsAngry);
      getRandomMovie(questionsAngry);
    }
    if (buttonType === 'idk-btn') {
      shuffle(questionsIdk);
      getRandomMovie(questionsIdk);
    }
  }

  // Call function to fetch the URL for a random movie based on the selected genre
  getMovieURl();
}

// Function to fetch the URL for a random movie based on the selected genre
function getMovieURl() {
  fetch(genreURl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var movieArray = data.results;
      // console.log(movieArray);
      var randomMovie =
        movieArray[Math.floor(Math.random() * movieArray.length)];
      localStorage.setItem('random-movie', JSON.stringify(randomMovie));
      // where to put items
      // how to put IN results html
    });
}

// Event listeners for button clicks and food suggestion clicks
moodBtns.addEventListener('click', clickedButton);
foodSuggestions.addEventListener(
  'click',
  () => (window.location.href = './results.html'),
);
