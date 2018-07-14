(function() {
    "use strict";

    angular.module("App").service("CityService", ["$http", "$log", CityService]);

    function CityService($http, $log) {
        var self = this;
        self.getWeatherByCity = getWeatherByCity;
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?";
        var apiKey = "72f5cf872643336bf96167d5dda813cf";

        function getWeatherByCity() {
            return true;
        }

        
        
    }

})();