(function() {
    'use strict';

    // controller depends on the service 
    //  refactoring the service below 
    //  I think this can be just changed to getting the weather 
    //  and storing as an object in the array, rather than repeat calls
    //   ng forEach 
    angular.module('weather.services').factory('Weather' ,[
       '$q',
       '$http',
       function($q, $http) {
           function Weather(apiData) {
               angular.extend(this, apiData);
           }

           Weather.prototype = Object.create()
           //   methods on the weather API 
           Weather.prototype.getWeather = function() {
            var req = {
                method: 'GET',
                url: '',
                headers: {
                    'x-api-key': '72f5cf872643336bf96167d5dda813cf'
                }
            }

           }

           return Weather;
       }
      
    ])
})();