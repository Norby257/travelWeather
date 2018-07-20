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
    //  making the cityName from input avail to child controllers
    //  this should be fn declaration instead of fn expr
 


    //  now figure out how to pass this to service - this is just like react, where parent component
    // passes props downward to child(ren) component(s)
    //  initialize model in the controller
    //  call the service
    //  see service for the function that is used to make API calls

    //  commenting out getUserLocation since while it does work
    //  it throws an issue bc Cannot read property 'then' of undefined
    // controller -handle user interaction 
    //   routing - camelCase Ctrl 
    //  route: Ctrl 
    //   weatherCtrl rather than just weather
    var vm = this;
    vm.forecasts = [];
    vm.getWeather = getWeather;
    vm.getCityWeather = getCityWeather;
    vm.title = "Forecast";

    activate();
    captureUserLocation();
    getWeather();
    // getCityWeather();
    getDefaultWeather();

    function activate() {
      $log.log("activated Weather View");
    }

    //  decision logic
    // if (captureUserLocation) {
    //   getWeather();
    // } else {
    //   getDefaultWeather();
    // }

    function captureUserLocation(crd) {
      return WeatherService.getUserLocation();
      vm.title = data;
      $log.log(data);
      $log.log(crd);
      return data;
    }

    function getWeather() {
      return WeatherService.getWeather().then(function(data) {
        vm.title = data;
      });
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
      //  do this with out imprting
      // function onSubmit(weatherForm) {
      //   //  get data from form
      //   // console.log(weatherForm);
      //   //  pass it into API call
      //   //  then clear the array so we don't
      //   //  continue to add elements to the array
      //   this.WeatherService(weatherForm.value.city).response(data)
      //   console.log(data)
      // };
    }
  }
})();
