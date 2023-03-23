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

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbApiKey}`)
.then(response => response.json())
.then(data => {
console.log(data);
})
.catch(error => {
console.error(error);
});

// Second movie API, need to replace with my key

const genreId = "10751"; // Replace this with the ID of the genre you want to search for

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbApiKey}&with_genres=${genreId}`)
.then(response => response.json())
.then(data => {
console.log(data);
})
.catch(error => {
console.error(error);
});

