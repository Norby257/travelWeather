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
    }

    function getCityWeather() {
      return $http
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=Raba&units=imperiat&APPID=72f5cf872643336bf96167d5dda813cf"
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
          "https://api.openweathermap.org/data/2.5/weather?zip=60661,us&units=imperial&APPID=72f5cf872643336bf96167d5dda813cf"
        )
        .then(function(response) {
          return response.data.main;
        })
        .catch(function() {
          return new Error("Failed to get Weather data");
        });
    }
  }
})();
