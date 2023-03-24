// yelp API key
var yelpApiKey = "ByTr1g12x5fWKcXeF8ifzkIZt_9MQb-76N6n-DxZyzx66ZudR53Z5Ez2TJ7MBktodnsmcVoiXqBdAing0k7BrGeJRA1yw4vTiwrofTx9m9k3clHgkhg3BV-IMsAcZHYx";
var tmdbApiKey = "5d63f52510b97ed689fb70d1b4978c73";

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


//---------------------------------------
//Questions

var question = document.querySelector('.question');
var choices = Array.from(document.querySelectorAll('.choices'));
var availableQuestions = {};
var currentQuestion = {};
var MAX_QUESTIONS = 3
var questionsHappy = [
    {
        question: "Are you Vegan/ Vegetarian?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },
    {
        question: "Do you want something sweet?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Do you want something savory?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Are you in the mood for something spicy?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Do you want something familiar?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Want to try something new?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Do you want a heavy meal?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },
    {
        question: "Do you want a light meal?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },
    {
        question: "Are you ready for anything?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Do you want to celebrate?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },]
    var questionsSad = [
    {
        question: "Are you Vegan/ Vegetarian?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Would you like dessert?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Do you want a warm hug?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Are you famished?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Do you want something light?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Do you want something comforting?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Are you looking for something familiar?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Are you looking for something different?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Do you need a pick-me-up?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },
]
    var questionsAngry = [
    {
        question: "Are you Vegan/ Vegetarian?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Do you want a hearty meal?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "How does Italian food sound?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Are you feeling spicy?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Have you eaten today?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Do you need a hug?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Do you want something healthy?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Do you want dessert with your meal?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Will you eat anything right now?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Are you ready for anything?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },]
    
    var questionsExcited = [
    
    {
        question: "Do you want carbs?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Are you celebrating something?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },
    {
        question: "Do you want something sweet?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Are you looking for something familiar?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Are you willing to try something new?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Do you want dinner?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },
    {
        question: "Do you want breakfast?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    },{
        question: "Are you ready for anything?",
        choice1: "Yes",
        choice2: "No",
        choice3: "I dont know",
    }
];

  // Shuffle function
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (currentIndex !== 0) {

      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

      // And swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }

    return array;
}

  // Shuffle the questions array
var shuffledQuestions = shuffle(questions);

  // Function to display a random question
function displayRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * shuffledQuestions.length);
    var randomQuestion = shuffledQuestions[randomIndex];

 // Display the random question on the page
    var questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = randomQuestion;
}

  // Call the displayRandomQuestion function when the user selects their mood
var moodSelector = document.getElementById("mood-selector");
moodSelector.addEventListener("change", displayRandomQuestion);


/* var questionIndex = Math.floor(Math.random() * availableQuestions.length);
currentQuestion = availableQuestions[questionIndex];
question.innerText = currentQuestion.question;

beginQuestions = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    nextQuestion();
};
nextQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        // localStorage.setItem('', );
        // return window.location.assign('./end.html');
    }}

// Add event listener for when a choice is clicked
choices.forEach(choice => {
    choice.addEventListener('click', e => {
    if (!acceptingAnswers) return};
    })

    // prevents multiple choices from being selected
    // acceptingAnswers = false;
    // var selectedChoice = e.target;
    // var selectedAnswer = selectedChoice.dataset['number'];
    // var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

    beginQuestions();
 */
