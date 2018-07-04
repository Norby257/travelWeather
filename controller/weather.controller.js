(function() {
  angular
    .module("App")
    .controller("weatherController", [
      "WeatherService",
      "$scope",
      weatherController
    ]);
  function weatherController(WeatherService, $scope) {
    // $scope.cityInput = {
    //     city: ""
    // };
    var vm = this;
    vm.forecasts = [];
    vm.getWeather = getWeather;
    vm.title = "Forecast";

    activate();
    // getWeather();
    // getCityWeather();
    getDefaultWeather();

    function activate() {
      console.log("activated Weather View");
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

        //  this should be a function
        //   push data into array
        // have to do the equivalent of for each -
        vm.forecasts.push(vm.title.data.list);
        console.log(vm.forecasts); // output: [Array(40)]
        console.log(vm.forecasts[0]); // array
        console.log(vm.forecasts[0].length); //
        //   loop thru array, grab every eighth element
        //  these are objects
        //   push the nested objects to a new array called 5-day forecast. it should contain an object for each day,
        //  so there should be five elements total (i.e.) Mon, Tues, Wed, Thurs, Fri, Sat
        var fiveDayForecast = [];
        for (let i = 0; i < vm.forecasts[0].length; i += 8) {
          console.log(vm.forecasts[0][i]);
          fiveDayForecast.push(vm.forecasts[0][i]);
          console.log(fiveDayForecast);

          //   these are just comments to test output is expected
          //    console.log(vm.forecasts[0][i].weather[0]);
          // console.log(vm.forecasts[0][i].main)
        }
        //  just want to quickly loop over this new array 
        //  to see what is up in it 
        console.log(fiveDayForecast);

        for (let i = 0; i < fiveDayForecast.length; i++) {
          console.log(fiveDayForecast[i]);
        }

        //   then we do ng-repeat on that new array (In HTML file)
        //  ng-repeat  forecast in forecasts 
        //   I am confident a more efficient solution is out there - doing this for now bc it works, then will make it right, make it fast
      });
    }
  }
})();

//
