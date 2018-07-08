(function() {
  "use strict";

  angular.module("App").service("WeatherService", ["$http", WeatherService]);

  function WeatherService($http) {
    var self = this;
    self.getWeather = getWeather;
    self.getCityWeather = getCityWeather;
    self.getDefaultWeather = getDefaultWeather;

    function getWeather() {
      return $http
        .get(
          "https://api.openweathermap.org/data/2.5/weather?lat=41&lon=-88&units=imperia&APPID=72f5cf872643336bf96167d5dda813cf"
        )
        .then(function(response) {
          return response;
        })
        .catch(function() {
          return new Error("Failed to get Weather data");
        });

    /*  
    function localWeather
    //  set up service relationship call here 
        navigator.geolocation.getCurrentPosition((pos) => {
          this.location = geo.coords;
          console.log(this.location);
          const lat = this.location.latitude;
          const lon = this.location.longitude;
          this.weatherService.localWeather(lat, lon).subscribe(
            (data) => {
              console.log(data);
            })
        })

    */ 
    }

    function getCityWeather() {
      return $http
        .get(
          // "https://api.openweathermap.org/data/2.5/weather?q=Raba&units=imperiat&APPID=72f5cf872643336bf96167d5dda813cf"
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=72f5cf872643336bf96167d5dda813cf`
          
        )
        .then(function(response) {
          return response;
        })
        .catch(function() {
          return new Error("Failed to get Weather data");
        });
    }
    function getDefaultWeather() {
      return $http
        .get(
          "https://api.openweathermap.org/data/2.5/forecast?zip=60661,us&units=imperial&APPID=72f5cf872643336bf96167d5dda813cf"
        )
        .then(function(response) {
         // loop thru array, incrementing by eight to 
         // get the five day forecast
        
          return response;
       
        })
        .catch(function() {
          return new Error("Failed to get Weather data");
        });
    }
  }
})();
