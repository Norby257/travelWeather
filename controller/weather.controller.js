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
        // $scope.cityInput = {
        //     city: ""
        // };
        var vm = this;
        vm.forecasts = [];
        vm.getWeather = getWeather;
        vm.title = 'Forecast';



        activate();
        // getWeather();
        // getCityWeather();
        getDefaultWeather();

        function activate() {
                console.log('activated Weather View');
        }

        function getWeather() {
            return WeatherService.getWeather().then(function (data) {
                vm.title = data;
              
            });
        }

        function getCityWeather() {
            return WeatherService.getCityWeather().then(function(data){
                vm.title = data;
            })
        }

        function getDefaultWeather() {
            return WeatherService.getDefaultWeather().then(function(data){
                vm.title = data;
               vm.projectInfo = {
                   heading: "Angular JS weather App",
                   subheading1: "Using open weather map API"
               }
            });
        }


    }

})();

//  






