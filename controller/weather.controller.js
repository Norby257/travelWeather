(function() {
  angular
    .module("App")
    .controller("weatherController", [
      "WeatherService",
      "$scope",
      "$log",
      weatherController
    ]);
  //  pseudocode for ng-repeat

  //  make a new array, set to variable
  //
  //  push each NEW forecast to the NEW array
  //  and then ng-repeat in index.html (forecast in forecasts)

  //  fiveDayForecast function should be avail in all
  //  functions here to avoid writing duplicate code - so far the defaultWeather() works
  //   I was unable to implement ng-repeat, but it is soemthing that I would like to learn

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
      //  call fiveDayForecast here 
    }

    function getCityWeather() {
      return WeatherService.getCityWeather($scope.cityName).then(function(
        data
      ) {
        vm.cityWeather = data;
        $log.log(vm.cityWeather);
        //  call fiveDayForecast here 
      });
    }

    function getDefaultWeather() {
      return WeatherService.getDefaultWeather().then(function(data) {
        getFiveDayForecast();
        $log.log(getFiveDayForecast);
        function getFiveDayForecast() {
          vm.weather = data;
          $log.log(data);
          vm.icon =
            "http://openweathermap.org/img/w/" +
            vm.weather.data.list[0].weather[0].icon +
            ".png";
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
          return fiveDayForecast;

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
