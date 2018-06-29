(function() {
    'use strict';

    // controller depends on the service 
    //  refactoring the service below 
    //  I think this can be just changed to getting the weather 
    //  and storing as an object in the array, rather than repeat calls
    //   ng forEach 
    //  call to get current weather 
    //  call to get five day forecast
    //  use the $q to resolve the p
    //  need a main app file => it sets up a main so it attaches modules 
    //  there are three API calls here 
    //  current location, user input field, and also default to 60661 
    //  so for defauly it's just by zip code and then API call 
    angular.module('App').service('WeatherService' ,[
       '$q',
       '$http',
       function($q, $http) {
           this.getWeather = function() {
            var req = {
                method: 'GET',
                url: 'api.openweathermap.org/data/2.5/weather?lat=41&lon=-87',
                //   url: 'api.openweathermap.org/data/2.5/weather? + "lat=" + pos.coords.latitude + "&lon=" + pos.coords.longitude + ",us&units=imperial
                headers: {
                    'x-api-key': '72f5cf872643336bf96167d5dda813cf'
                }
            }
            return $q.resolve('APIDATA')
            
           },

           function($q, $http) {
               this.getWeatherByCity = function() {
                //  city is the value from the controller 
                //  need to have ng-submit or ng-click to send it?
                //    var city = city;
                   var req = {
                       method: 'GET',
                       url: 'https://api.openweathermap/or/g2.5/weathe?q='+cityInput+'&appid=72f5cf872643336bf96167d5dda813cf',
                       headers: {
                           'x-api-key': '72f5cf872643336bf96167d5dda813cf'
                           
                       }
                      
                   }
                   return $q.resolve('API CITY DATA')
               }
           },

           function($q, $http) {
               this.getDefaultWeather = function() {
                var req = {
                    method: 'GET',
                    url: 'api.openweathermap.org/data/2.5/weather?zip=60661,us&appid=72f5cf872643336bf96167d5dda813cf',
                }
                return $q.resolve('API default DATA')
            }

               }
           }


       
       
      
    ])
})();