(function() {
    angular
      .module("App")
      .controller("homeController", [
        "$scope",
        "$log",
        HomeController,
      ]);
    }
    ());