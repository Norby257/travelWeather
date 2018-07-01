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
                // vm.icon  = "http://openweathermap.org/img/w/"+title.data.list[0].weather[0].icon +".png"
               //   push data into array 
               //   then find a more efficient way to do this so i don't have to type as much 
               //   reduce risk of error by less typing 
               //   did preIncrement since postIncrement was generating infinite loop 
               //   preIncrement means var val is incremented before expr is eval
               vm.forecasts.push(vm.title.data.list);
               console.log(vm.forecasts); // output: [Array(40)]
               console.log(vm.forecasts[0]);
               console.log(vm.forecasts[0].length);
               for (let i = 0; i < vm.forecasts[0].length; i+=8) {
                   console.log(vm.forecasts[0][i]);
                //    console.log(vm.forecasts[0][i].weather[0]);
                // console.log(vm.forecasts[0][i].main)
               }
            //    console.log(vm.forecasts[0][0]); // output {dt: " ", prop: val, etc: etc}

               //   cache the vm.forecasts[0][0]?
               //   loop thru array, grab every eighth element 
               //  

               //   push that to a new array called 5-day forecast

               //   then we do ng-repeat on that new array 

               //   I am confident a more efficient solution is out there
               //   doing this for now bc it works, then will make it right, make it fast 
            });
        }


    }

})();

//  






