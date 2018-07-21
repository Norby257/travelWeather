(function() {
  "use strict";

  angular.module("App").service("WeatherService", ["$http", "$window", "$log", WeatherService]);

  function WeatherService($http,  $window, $log) {
    var self = this;
    // self.getWeather = getWeather;
    self.getCityWeather = getCityWeather;
    self.getDefaultWeather = getDefaultWeather;
    self.getUserLocation = getUserLocation;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?";
    var apiKey = "72f5cf872643336bf96167d5dda813cf";

    function getUserLocation() {
      if (!$window.navigator.geolocation) {
        //  call default function here?
        return ('Gelocation not supported by this browser');
      } else {
        function success(pos) {
          var crd = pos.coords;
          var lat = crd.latitude;
          var lon = crd.longitude;
          $log.log(lat);
          $log.log(lon); 
          return $http(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=72f5cf872643336bf96167d5dda813cf`)
          .then(function(response){
            $log.log(response);
            return response;
          })     
        }    
        function error(err) {
          $log.warn(`ERROR(${err.code}): ${err.message}`);
        }

        $window.navigator.geolocation.getCurrentPosition(success, error);        
      }

    
    }

  
// https://code.angularjs.org/1.5.6/docs/error/$http/badreq?p0=https:%2F%2Fapi.openweathermap.org%2Fdata%2F2.5%2Fweather%3Flat%3D41.8659317%26lon%3D-87.62150009999999%26units%3Dimperial%26APPID%3D72f5cf872643336bf96167d5dda813cf

    function getCityWeather(cityName) {
      return $http
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName},us&units=imperial&APPID=72f5cf872643336bf96167d5dda813cf`
          
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
