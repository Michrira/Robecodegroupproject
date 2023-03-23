


/*fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)
/* //Bryan's yelp example, need to update with my key when I get it//

fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Los%20Angeles&sort_by=best_match&limit=20",{
headers:{
    "authorization":"Bearer HHdD8QKXJrbdHE86msNV_mcpTvQokFr_8FsyCI_oYC_TUVuZiPk2tG-CUYZl6n7Ecl0k8qx_spVixJu9_bX2VYwOO4aiFe3Msre6Jbtkj8lehDFRTxgIld-900gbZHYx"
}
})
.then(function(response){
return response.json()
})
.then(function(data){
console.log(data)
})

//location code//
<script>
var x = document.getElementById("demo");

function getLocation() {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
x.innerHTML = "Latitude: " + position.coords.latitude + 
"<br>Longitude: " + position.coords.longitude;
}
</script>

</body>
</html>

//first movie api, need to replace with my key//
const apiKey = "7a5e1c0d82259f941772e1baf73aad08";

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
.then(response => response.json())
.then(data => {
    // Handle the genre data here
    console.log(data);
})
.catch(error => {
    console.error(error);
});

//second movi api, need to replace with my key//
const apiKey = "7a5e1c0d82259f941772e1baf73aad08";
const genreId = "10751"; // Replace this with the ID of the genre you want to search for

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
.then(response => response.json())
.then(data => {
    // Handle the movie data here
    console.log(data);
})
.catch(error => {
    console.error(error);
});
 */

// Bryan's Yelp example, need to update with my key when I get it

var yelpApiKey = "HHdD8QKXJrbdHE86msNV_mcpTvQokFr_8FsyCI_oYC_TUVuZiPk2tG-CUYZl6n7Ecl0k8qx_spVixJu9_bX2VYwOO4aiFe3Msre6Jbtkj8lehDFRTxgIld-900gbZHYx";

fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Los%20Angeles&sort_by=best_match&limit=20", {
headers: {
"Authorization": `Bearer ${yelpApiKey}`
}
})
.then(response => response.json())
.then(data => {
console.log(data);
})
.catch(error => {
console.error(error);
});

// Location code

var locationButton = document.querySelector("#location-button");
var locationParagraph = document.querySelector("#location-paragraph");

function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);
} else {
locationParagraph.textContent = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
locationParagraph.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

locationButton.addEventListener("click", getLocation);

// First movie API, need to replace with my key

var tmdbApiKey = "5d63f52510b97ed689fb70d1b4978c73";

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=$5d63f52510b97ed689fb70d1b4978c73`)
.then(response => response.json())
.then(data => {
console.log(data);
})
.catch(error => {
console.error(error);
});

// Second movie API, need to replace with my key

const genreId = "10751"; // Replace this with the ID of the genre you want to search for

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=$5d63f52510b97ed689fb70d1b4978c73&with_genres=${genreId}`)
.then(response => response.json())
.then(data => {
console.log(data);
})
.catch(error => {
console.error(error);
});

//---------------------------------------
//Questions

var question = document.querySelector('.question');
var choices = Array.from(document.querySelectorAll('.choices'));
var availableQuestions = {};

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

beginQuestions = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    nextQuestion();
};
nextQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('./end.html');
    }}

    beginQuestions();





//yelp api

curl --request GET \
     --url 'https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20' \
     --header 'accept: application/json'

