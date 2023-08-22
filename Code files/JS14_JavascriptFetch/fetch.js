const getDataButton = document.getElementById("get-data-button");
const dataContainer = document.getElementById("weather");
getDataButton.addEventListener("click", () => {
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(response => response.json())
 .then(data => {
 data.forEach( post => {
 let postData = document.createElement('div');
 postData.innerHTML = `<h2>${post.title}</h2> <p>${post.body}</p>`;
 dataContainer.appendChild(postData);
 });
 })
 .catch(err => {
    console.log(err);
    });
});

//Weather app
const cityBtn = document.getElementById("cityBtn");
let cityBox = document.getElementById("city");
let url = "https://api.openweathermap.org/data/2.5/weather?";
let key = "631a45a024619e722d339758568d339f";
let lat = " ";
let lon = " ";
let geo = "http://api.openweathermap.org/geo/1.0/direct?q=";


cityBtn.addEventListener("click", () => {
    
    output = " ";
    let cityn = cityBox.value;
    let geoUrl = geo + cityn + "&appid=" + key;
    fetch(geoUrl).then(function(response){
        return response.json();
    }).then(function(res){
        getGeoPos(res);
    });
    let getGeoPos = function(res){
        lat = res[0].lat;
        lon = res[0].lon;
        let sUrl = url + "lat=" + lat + "&lon=" + lon + "&appid=" + key;
        
        fetch(sUrl).then(function(response){
        return response.json();
        }).then(function(weather) {
            displayWeather(weather);
            console.log(weather);
        });
    }
})

let displayWeather = function(weather){
    
    let city = weather.name;
    let currentTemp =  weather.main.temp;
    let humid = weather.main.humidity;
    let description= weather.weather[0].description;
    let windSpeed = weather.wind.speed;

   output = "<h1>These are the Current Conditions in " + city + ".</h1>";
   output += "<div id='temp'><div id='box'><h2>Current Temp: </h2><p>" + (Math.round((currentTemp - 273.15) * 9/5 + 32)) + "<p>";
   output += "<h2>Wind Speed: </h2><p>" + windSpeed + "</p>";
   output += "<h2>Humidity: </h2><p>" + humid + "</p>";
   output += "<h2>How the skies look: </br></h2><p>" + description + "</p></div></div>";

   document.getElementById("weather").innerHTML = output;
}


