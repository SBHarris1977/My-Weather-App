//select elements created in html
/*const notifyElement = document.querySelector('.notification');
const locationEl = document.querySelector('.location p');
const icon = document.querySelector('.weather-icon');
const tempEl = document.querySelector('.temperature-value p');
const humidEl = document.querySelector('.humidity-value p');
const windElement = document.querySelector('.wind-speed p');
const uvElement = document.querySelector('.uv-index p');

//add data
const weather = {};
//convert kelvin into celsius and/or farenhiet
weather.temperature = {
    unit: 'celsius'
}

const KELVIN = 273;

//API Key 
const APIKey = "1dd029263e9a36200e5256b3f8ab4a28";

//Check to see if browser supports Gelocation
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
    }else{
        notifyElement.style.display = 'block';
        notifyElement.innerHTML = "<p>Browser doesn't support Geolocation</p>";
    }

    //Get the uers location/position
    function setPosition(postion){
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;

getWeather(latitude, longitude);

    }

    //Show the error if geolocation doesn't work
    function showError(error){
        notifyElement.style.display = 'block';
        notifyElement.innerHTML = '<p> ${error.message} </p>';

    }*/

    //API Key 
var APIKey = "1dd029263e9a36200e5256b3f8ab4a28";

    //get weather from API
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +"q=Austin&units=imperial&appid=" + APIKey;
     
    

  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);

      //Transfer content from API to HTML
      $(".location").html("<p>" + response.name);
      $('.weather-icon').html("<p>" + response.weather[0].icon);
      $('.temperature-value').html("Temp: " + response.main.temp + '°F');
      $('.humidity-value').html("Humidity: " + response.main.humidity + '%');
      $('.wind-speed').html("Wind Speed: " + response.wind.speed + ' MPH');

     

    });

//need to find weather API to get temperature of several locations
//display the weather retrieved from the API (city, date, icon image of weather, temperature, humidity, wind 
//speed and uv index)
//Include 5 day forecast below current weather to include (Date, icon image, temp and humidity)
//Include a search history (local storage)
//Will need convert temp from kelvin to farenheight
//OpenWeatherMap API OpenWeather API
//Mult functions needed to create different parts of dashboard (current conditions, 5-day forecact, search history
//and UV index)
//Will need nore than one ajax call

//Bonus use Geolocation to add user's current location to the initial landing page