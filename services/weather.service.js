(function() {
  "use strict";

  angular.module("App").service("WeatherService", ["$http", "$window", WeatherService]);

  function WeatherService($http,  $window) {
    var self = this;
    self.getWeather = getWeather;
    self.getCityWeather = getCityWeather;
    self.getDefaultWeather = getDefaultWeather;
    self.getUserLocation = getUserLocation;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?";
    var apiKey = "72f5cf872643336bf96167d5dda813cf";

    function getUserLocation() {
      if (!$window.navigator.geolocation) {
        return ('Gelocation not supported by this browser');
      } else {
        function success(pos) {
          var crd = pos.coords;
          var lat = crd.latitude;
          var lon = crd.longitude;
          console.log(lat);
          console.log(lon);
          return crd;
        }
        function error(err) {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        // 1 googling to see if there is a way of doing this without $q
        //  2 or if there is an alternative way of navigator.gelocation 
        //  since this isn't an $http req per say 
        //  as per console log, output of navigator.gelocation function is undefined. 

        $window.navigator.geolocation.getCurrentPosition(success, error);
        
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
