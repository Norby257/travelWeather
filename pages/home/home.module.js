;(function() {
  "use strict"

  // @ngInject
  angular.module("home", []).config(configure)

  function configure($stateProvider) {
    // has to do with routing
    //  corresponds to a place in the app in terms of the UI
    //   and nav
    $stateProvider.state("home", {
      url: "/",
      views: {
        main: {
          templateUrl: "/",
          controller: "HomeController",
          controllerAs: "HomeCtrl"
        }
      },
      //  change this to get weather
      resolve: {
        weather: getWeather
      },
      data: {
        layoutClass: "main-layout",
        pageTitle: "Home"
      }
    })
  }

  function getWeather($http) {
    return (
      $http
        //  open weather map api
        .get(
          "https://api.openweathermap.org/data/2.5/forecast?zip=60661,us&appid=8a9a54078c0759599ee01794cc7774dd"
        )
        .then(function(response) {
          console.log(response.data)
          return response.data
        })
        .catch(function() {
          return []
        })
    )
  }
})()
