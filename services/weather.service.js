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
    angular.module('App').service('WeatherService' ,[
       '$q',
       '$http',
       function($q, $http) {
           this.getWeather = function() {
            var req = {
                method: 'GET',
                url: '',
                headers: {
                    'x-api-key': '72f5cf872643336bf96167d5dda813cf'
                }
            }
            return $q.resolve('APIDATA')
            
           }


       }
       
      
    ])
})();