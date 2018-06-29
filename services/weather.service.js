(function () {
    'use strict';

    // controller depends on the service 
    //  and storing as an object in the array, rather than repeat calls
    //   ng forEach 
    //  call to get current weather 
    //  call to get five day forecast
    //  use the $q to resolve the p
    //  need a main app file => it sets up a main so it attaches modules 
    //  there are three API calls here 
    //  current location, user input field, and also default to 60661 
    //  so for defauly it's just by zip code and then API call 
    angular.module('App').service('WeatherService', [
        '$http',
        function getWeather($http) {
            return $http
            .get('https://api.openweathermap.org/data/2.5/weather?lat=41&lon=-88&APPID=72f5cf872643336bf96167d5dda813cf')
            .then(function(response){
                //  what we are sending back 
                //  temperture: min and max 
                //  chance of rain
                //  wind speed
            })
            .catch(function() {
                return new Error ('Failed to get Weather data');

            });
        }        
    ])
})();