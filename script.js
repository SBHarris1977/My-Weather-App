//select elements created in html
const notifyElement = document.querySelector('.notification');
const locationEl = document.querySelector('.location p');
const icon = document.querySelector('.weather-icon');
const tempEl = document.querySelector('.temperature-value p');
const humidEl = document.querySelector('.humidity-value p');
const windElement = document.querySelector('.wind-speed p');
const uvElement = document.querySelector('.uv-index p');



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

//Bonus use Geolocation to add user's current location to the initial landing page.