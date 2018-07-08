(function() {
  "use strict";

  angular.module("App").service("WeatherService", ["$http", "$window", WeatherService]);

  function WeatherService($http) {
    var self = this;
    self.getWeather = getWeather;
    self.getCityWeather = getCityWeather;
    self.getDefaultWeather = getDefaultWeather;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?";
    var apiKey = "72f5cf872643336bf96167d5dda813cf";


    function getUserLocation() {
      if (!$window.navigator.geolocation) {
        return ('Gelocation not supported by this browser');
      } else {
        $window.navigator.geolocation.getCurrentPosition(
          function(position) {
            this.location = geo.coords;
            console.log(this.location);
            var lat = this.location.latitude;
            var lon = this.location.longitude;


          },
         function(err) {
           return ('Error');
         }
        )
      }
      return {
        getCurrentPosition: getCurrentPosition
      }

    }

    function getWeather() {
      return $http
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=-${lon}&units=imperia&APPID=72f5cf872643336bf96167d5dda813cf`
        )
        .then(function(response) {
          return response;
        })
        .catch(function() {
          return new Error("Failed to get Weather data");
        });


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
