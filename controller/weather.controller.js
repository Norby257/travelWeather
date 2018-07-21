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
  function weatherController(WeatherService, $scope, $log) {
    $scope.$log = $log;
    // controller -handle user interaction 
    //   routing - camelCase Ctrl 
    //  route: Ctrl 
    //   weatherCtrl rather than just weather
    var vm = this;
    vm.forecasts = [];
    // vm.getWeather = getWeather;
    vm.getCityWeather = getCityWeather;
    vm.title = "Forecast";

    activate();
    captureUserLocation();
    // getWeather();
    // getCityWeather();
    getDefaultWeather();

    function activate() {
      $log.log("activated Weather View");
    }

    function captureUserLocation(crd) {
      return WeatherService.getUserLocation();
      vm.title = data;
      $log.log(data);
      $log.log(crd);
      return data;
    }

    function getCityWeather() {
      return WeatherService.getCityWeather($scope.cityName).then(function(data) {
        vm.weather = data;
        $log.log(vm.weather);
      });
    }

    function getDefaultWeather() {
      return WeatherService.getDefaultWeather().then(function(data) {
        // vm.icon  = "http://openweathermap.org/img/w/"+title.data.list[0].weather[0].icon +".png"
        getFiveDayForecast();

        function getFiveDayForecast() {
          vm.title = data;
          vm.forecasts.push(vm.title.data.list);
          $log.log(vm.forecasts); // output: [Array(40)]
          $log.log(vm.forecasts[0]); // array
          $log.log(vm.forecasts[0].length); //
          //   loop thru array, grab every eighth element
          //   push the nested objects to a new array called 5-day forecast. it should contain an object for each day,
          //  so there should be five elements total (i.e.) Mon, Tues, Wed, Thurs, Fri, Sat
          //   | date 'yymmdd'
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
