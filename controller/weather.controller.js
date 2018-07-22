(function() {
  angular
    .module("App")
    .controller("weatherController", [
      "WeatherService",
      "$scope",
      "$log",
      weatherController
    ]);

  //  this is the parent controller
  //  pass values from the parent controller
  //  to child controllers
  //  refer to  -  objects and types of ydkjs and also private and public methods 
  //  pseudocode for ng-repeat 
  //  make a class called forecast -blank class 
  //  then instantiate a new class for each FORECAST
  //  push each NEW forecast to FORECASTS array 
  //  and then ng-repeat in index.html 
  //  also each api call has a response, and each one is slightly different
  
  function weatherController(WeatherService, $scope, $log) {
    $scope.$log = $log;
    var vm = this;
    vm.forecasts = [];
    vm.getCityWeather = getCityWeather;
    vm.title = "Forecast";
    $log.info(vm.title);
    activate();
    captureUserLocation();
    getDefaultWeather();

    function activate() {
      $log.log("activated Weather View");
    }



    function captureUserLocation(crd) {
      return WeatherService.getUserLocation();
      vm.title = data;
      $log.log(data);
      $log.log(vm.title.list);
      $log.log(crd);
      return data;
    }

    function getCityWeather() {
      return WeatherService.getCityWeather($scope.cityName).then(function(
        data
      ) {
        vm.weather = data;
        $log.log(vm.weather);
        $log.log(vm.weather.data.main);
        //  icon 
        // vm.high = vm.weather.data.main.temp_max;
        // vm.low = vm.weather.data.main.temp_min;
        // vm.temp = vm.weather.data.temp;
        // vm.humidity = vm.weather.data.humidity;
        // $log.log(vm.high);
      });
    }

    function getDefaultWeather() {
      return WeatherService.getDefaultWeather().then(function(data) {
        getFiveDayForecast();

        function getFiveDayForecast() {
          vm.weather = data;
          $log.log(data);
          vm.icon  = "http://openweathermap.org/img/w/"+vm.weather.data.list[0].weather[0].icon +".png"
          vm.date = vm.weather.data.list[0].dt_txt;
          vm.weatherCondition = vm.weather.data.list[0].weather[0].description;
          vm.temperature = vm.weather.data.list[0].main.temp;
          vm.high = vm.weather.data.list[0].main["temp_max"];
          vm.low = vm.weather.data.list[0].main["temp_min"];
          vm.humidity = vm.weather.data.list[0].main.humidity;
         

          //  this is where we are pushing to forecasts array
          vm.forecasts.push(vm.weather.data.list);
          // $log.log(vm.forecasts); // output: [Array(40)]
          $log.log(vm.forecasts[0].length); //
          //  that way we can iterate over that variable i.e. 'forecast in forecasts' 
          var fiveDayForecast = [];
          for (let i = 0; i < vm.forecasts[0].length; i += 8) {
            $log.log(vm.forecasts[0][i]);
            fiveDayForecast.push(vm.forecasts[0][i]);
            // console.log(fiveDayForecast);
          }

          //  just want to quickly loop over this new array
          $log.log(fiveDayForecast);

          // for (let i = 0; i < fiveDayForecast.length; i++) {
          //   $log.log(fiveDayForecast[i]);
          // }
        }
        //   then we do ng-repeat on that new array (In HTML file)
        //  ng-repeat  forecast in forecasts
      });
    }
  }
})();
