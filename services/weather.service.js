(function() {
    'use strict';


    angular.module('thing here').factory('placeholderThingHere' ,[
       '$q',
       '$http',
       function($q, $http) {
           function Weather(apiData) {
               angular.extend(this, apiData);
           }

           Weather.prototype = Object.create()
           //   methods on the weather API 
           Weather.prototype.getWeather = function() {

           }

           Weather.prototype.GetMaxTemp = function() {

           }

           Weather.prototype.GetMinTemp = function() {

           }
           Weater.prototype.getPrecipitation = function() {

           }
           return Weather;
       }
      
    ])
})();