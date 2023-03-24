var happyBtn = document.querySelector("#happy-btn");
var sadBtn = document.querySelector("#sad-btn");
var excitedBtn = document.querySelector("#excited-btn");
var angryBtn = document.querySelector("#angry-btn");
var idkBtn = document.querySelector("#idk-btn");

var happyArray = ["16", "35", "10751", "10770"];
var sadArray = ["18", "14", "10402", "10749"];
var excitedArray = ["28", "12", "53", "9648"];
var angryArray = ["27", "99", "10752", "80"];
var idkArray = [
  "28",
  "12",
  "16",
  "35",
  "80",
  "99",
  "18",
  "10751",
  "14",
  "36",
  "27",
  "10402",
  "9648",
  "10749",
  "878",
  "10770",
  "53",
  "10752",
  "37",
];

var randomItem = "";
var genreURl = "";

var requestURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=7a5e1c0d82259f941772e1baf73aad08&with_original_language=en&with_genres=";

var availableQuestions = {};
var currentQuestion = {};
var MAX_QUESTIONS = 3;

// Shuffle function
function shuffle(array) {
    var currentIndex = array.length;
    
    console.log(currentIndex)

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

// Function to display a random question
function displayRandomQuestion(shuffledQuestions) {
  var randomIndex = Math.floor(Math.random() * shuffledQuestions.length);
  var randomQuestion = shuffledQuestions[randomIndex];
  console.log(randomQuestion);
  // Display the random question on the page
  var questionContainer = document.getElementById("food-container");
  questionContainer.innerHTML += `<h2>${randomQuestion.question}</h2>
    <select id="food-selection">
        <option value="${randomQuestion.choice1}">${randomQuestion.choice1}</option>
        <option value="${randomQuestion.choice2}">${randomQuestion.choice2}</option>
        <option value="${randomQuestion.choice3}">${randomQuestion.choice3}</option>

    <button id="get-food-btn">Get food suggestions</button>`;
}

function clickedButton(event) {
  event.preventDefault();

  var element = event.target;
  if (element.matches("button")) {
    var buttonType = element.getAttribute("id");

    if (buttonType === "happy-btn") {
      //randomy pick 1 from happy
      randomItem = happyArray[Math.floor(Math.random() * happyArray.length)];
      genreURl = requestURL.concat(randomItem);
      var shuffledQuestions = shuffle(questionsHappy);
      console.log(shuffledQuestions);
      displayRandomQuestion(shuffledQuestions);
      displayRandomQuestion(shuffledQuestions);
    }
//     else if (buttonType === "sad-btn") {
//       //randomy pick 1 from sad
//       randomItem = sadArray[Math.floor(Math.random() * sadArray.length)];
//       genreURl = requestURL.concat(randomItem);
//       var shuffledQuestions = shuffle(questionsSad);
//       console.log(shuffledQuestions);
//       displayRandomQuestion(shuffledQuestions);
//       displayRandomQuestion(shuffledQuestions);
//     } else if (buttonType === "excited-btn") {
//       //randomy pick 1 from excited
//       randomItem =
//         excitedArray[Math.floor(Math.random() * excitedArray.length)];
//       genreURl = requestURL.concat(randomItem);
//       var shuffledQuestions = shuffle(questionsExcited);
//       console.log(shuffledQuestions);
//       displayRandomQuestion(shuffledQuestions);
//       displayRandomQuestion(shuffledQuestions);
//     } else if (buttonType === "angry-btn") {
//       //randomy pick 1 from happy
//       randomItem = angryArray[Math.floor(Math.random() * angryArray.length)];
//       genreURl = requestURL.concat(randomItem);
//       var shuffledQuestions = shuffle(questionsAngry);
//       console.log(shuffledQuestions);
//       displayRandomQuestion(shuffledQuestions);
//       displayRandomQuestion(shuffledQuestions);
//     } else buttonType === "Idk-btn";
//     //randomy pick 1 from idk
//     randomItem = idkArray[Math.floor(Math.random() * idkArray.length)];
//     genreURl = requestURL.concat(randomItem);
//     var shuffledQuestions = shuffle(questionsIdk);
//     console.log(shuffledQuestions);
//     displayRandomQuestion(shuffledQuestions);
//     displayRandomQuestion(shuffledQuestions);
  }
  getMovieURl();
}

function getMovieURl() {
  fetch(genreURl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var movieArray = data.results;
      console.log(movieArray);
      var randomMovie =
        movieArray[Math.floor(Math.random() * movieArray.length)];
      localStorage.setItem("random-movie", JSON.stringify(randomMovie));
      // where to put items
      // how to put IN results html
    });
}

moodBtns.addEventListener("click", clickedButton);
