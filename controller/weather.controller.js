(function() {
  angular
    .module("App")
    .controller("weatherController", [
      "WeatherService",
      "$scope",
      "$log",
      weatherController,

    ]);

  
  function weatherController(WeatherService, $scope, $log) {
    $scope.$log = $log;
    $scope.submit = function() {
      $log.log($scope.cityName);
      //  now figure out how to pass this to service
      //  initialize model in the controller 
      //  call the service 
      //  see service for the function that is used to make API calls
      var cityName = $scope.cityName;
      $log.log(cityName);
    }

    //  commenting out getUsrLocation since while it does work 
    //  it throws an issue bc Cannot read property 'then' of undefined

  
    var vm = this;
    vm.forecasts = [];
    vm.getWeather = getWeather;
    vm.title = "Forecast";

    activate();
    captureUserLocation();
    // getWeather();
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



    function captureUserLocation() {
       return WeatherService.getUserLocation();
       vm.title = data;
       $log.log(data);
      }

    function getWeather() {
      return WeatherService.getWeather().then(function(data) {
        vm.title = data;
      });
    }

    function getCityWeather() {
      return WeatherService.getCityWeather().then(function(data) {
        vm.title = data;
      });
    }

    function getDefaultWeather() {
      return WeatherService.getDefaultWeather().then(function(data) {
        vm.title = data;
        // vm.icon  = "http://openweathermap.org/img/w/"+title.data.list[0].weather[0].icon +".png"

        //  this should be a function aka,
        //  get forecast can be defined earlier so it can be accessed 
      
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

          //   these are just comments to test output is expected
          //    console.log(vm.forecasts[0][i].weather[0]);
          // console.log(vm.forecasts[0][i].main)
        }

        //  just want to quickly loop over this new array 
        $log.log(fiveDayForecast);

        for (let i = 0; i < fiveDayForecast.length; i++) {
          $log.log(fiveDayForecast[i]);
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

