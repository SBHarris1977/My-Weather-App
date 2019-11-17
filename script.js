//Javascript
//API Key 
var APIKey = "1dd029263e9a36200e5256b3f8ab4a28";

//get weather from API for current day
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Austin&units=imperial&appid=" + APIKey;



// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function (response) {

    //Log the queryURL
    //console.log(queryURL)


    // Log the resulting object
    //console.log(response)

    // Transfer content from API to HTML
    $(".location").html("<p>" + response.name);
    $(".weather-icon").html("<p>" + response.weather[0].icon);
    $(".temperature-value").html("Temp: " + response.main.temp + "°F");
    $(".humidity-value").html("Humidity: " + response.main.humidity + "%");
    $(".wind-speed").html("Wind Speed: " + response.wind.speed + " MPH");
  })

///Atlanta
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +"q=Atlantan&units=imperial&appid=" + APIKey;

$(".atlanta").on("click", event);

function event() {
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Atlanta&units=imperial&appid=" + APIKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {

      $(".location").html("<p>" + response.name);
      $(".weather-icon").html("<p>" + response.weather[0].icon);
      $(".temperature-value").html("Temp: " + response.main.temp + "°F");
      $(".humidity-value").html("Humidity: " + response.main.humidity + "%");
      $(".wind-speed").html("Wind Speed: " + response.wind.speed + " MPH");
    })

  //Boston AP
  $(".boston").on("click", event);

  function event() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Boston&units=imperial&appid=" + APIKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {

        $(".location").html("<p>" + response.name);
        $(".weather-icon").html("<p>" + response.weather[0].icon);
        $(".temperature-value").html("Temp: " + response.main.temp + "°F");
        $(".humidity-value").html("Humidity: " + response.main.humidity + "%");
        $(".wind-speed").html("Wind Speed: " + response.wind.speed + " MPH");

        //        console.log(queryURL)
        //       console.log(response)
      })

    //Denver API
    $(".denver").on("click", event);

    function event() {
      var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Denver&units=imperial&appid=" + APIKey;
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function (response) {

          $(".location").html("<p>" + response.name);
          $(".weather-icon").html("<p>" + response.weather[0].icon);
          $(".temperature-value").html("Temp: " + response.main.temp + "°F");
          $(".humidity-value").html("Humidity: " + response.main.humidity + "%");
          $(".wind-speed").html("Wind Speed: " + response.wind.speed + " MPH");

          console.log(queryURL)
          console.log(response)
        })
        
        //Los Angeles API
     $(".los-angeles").on("click", event);

    function event() {
   var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Los Angeles&units=imperial&appid=" + APIKey;
    $.ajax({
     url: queryURL,
   method: "GET"
    })
      .then(function (response) {

    $(".location").html("<p>" + response.name);
     $(".weather-icon").html("<p>" + response.weather[0].icon);
       $(".temperature-value").html("Temp: " + response.main.temp + "°F");
     $(".humidity-value").html("Humidity: " + response.main.humidity + "%");
      })
    }
  }
}
}

    
  

