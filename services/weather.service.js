(function () {
    'use strict';
    //  call to get current weather 
    //  call to get five day forecast
    //   based on: current location, user input field, and also default to 60661 
    //  so for default it's just by zip code and then API call 
    //  how to get geoloc script to communicate with this one 
    angular.module('App').service('WeatherService', [
        '$http', WeatherService]);

        function WeatherService($http) {
            var self = this;
            self.getWeather = getWeather;
            self.getCityWeather = getCityWeather;
            self.getDefaultWeather = getDefaultWeather;

            function getWeather() {
                return $http
                .get('https://api.openweathermap.org/data/2.5/weather?lat=41&lon=-88&APPID=72f5cf872643336bf96167d5dda813cf')
                .then(function(response){
                    return response;
                })
                .catch(function(){
                    return new Error ('Failed to get Weather data');
                })
            }

            function getCityWeather() {
                return $http
                .get('https://api.openweathermap.org/data/2.5/weather?q=Rabat&APPID=72f5cf872643336bf96167d5dda813cf')
                .then(function(response){
                    return response
                })
                .catch(function() {
                    return new Error ('Failed to get Weather data');
                })
            }
            function getDefaultWeather() {
                return $http
                .get('https://api.openweathermap.org/data/2.5/weather?zip=60661,us&APPID=72f5cf872643336bf96167d5dda813cf')
                .then(function(response){
                    return response
                })
                .catch(function() {
                    return new Error ('Failed to get Weather data');
                })
            }
        }


})();