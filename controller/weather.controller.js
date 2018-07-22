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
  function weatherController(WeatherService, $scope, $log) {
    $scope.$log = $log;
    var vm = this;
    vm.forecasts = [];
    vm.getCityWeather = getCityWeather;
    vm.title = "Forecast";
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
      $log.log(crd);
      // getFiveDayForecast();
      return data;
    }

    function getCityWeather() {
      return WeatherService.getCityWeather($scope.cityName).then(function(
        data
      ) {
        vm.weather = data;
        $log.log(vm.weather);
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
          $log.log(vm.humidity);

          vm.forecasts.push(vm.weather.data.list);
          $log.log(vm.forecasts); // output: [Array(40)]
          $log.log(vm.forecasts[0]); // array
          $log.log(vm.forecasts[0].length); //
          //   loop thru array, grab every eighth element
          //   push the nested objects to a new array called 5-day forecast. it should contain an object for each day,
          //  so there should be five elements total (i.e.) Mon, Tues, Wed, Thurs, Fri, Sat
          //   | date 'yymmdd'
          //  each element is stored in variable 
          //  that way we can iterate over that variable i.e. 'forecast in forecasts' 
          var fiveDayForecast = [];
          for (let i = 0; i < vm.forecasts[0].length; i += 8) {
            $log.log(vm.forecasts[0][i]);
            fiveDayForecast.push(vm.forecasts[0][i]);
            console.log(fiveDayForecast);
          }

          //  just want to quickly loop over this new array
          $log.log(fiveDayForecast);

          for (let i = 0; i < fiveDayForecast.length; i++) {
            $log.log(fiveDayForecast[i]);
          }
        }
        //   then we do ng-repeat on that new array (In HTML file)
        //  ng-repeat  forecast in forecasts
      });
    }
  }
})();
