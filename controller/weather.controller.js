//  example of what you can do with weather service 
//  i.e. call the API 
//  get data 
//  store in array 
//  then ng- ng repeat 
//  use fn declarations 
//  following Jonh Papa 
//  controller handles user interaction with app 
//  actual HTTP call is in the service
//  controller calls the service 
//  in template do the ng-click 
(function () {
    angular.module('App')
        .controller('weatherController', ['WeatherService', '$scope', weatherController])
    function weatherController(WeatherService, $scope) {
        $scope.cityInput = {
            city: ""
        };
        var vm = this;
        vm.forecasts = [];
        vm.getWeather = getWeather;
        vm.title = 'Forecast';



        activate();
        // getWeather();
        function activate() {
                console.log('activated Weather View');
        }

        function getWeather() {
            return WeatherService.getWeather().then(function (data) {
                vm.title = data;
            });
        }


    }

})();





