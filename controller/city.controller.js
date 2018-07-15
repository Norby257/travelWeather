(function(){
    angular
    .module("App")
    .controller("cityController", [
        "CityService",
        "$scope",
        "$log",
        cityController,
    ]);


    function cityController(CityService, $scope, $log) {
        $scope.log = $log;
        $scope.submit = function() {
            $log.log($scope.cityName);
            var cityName = $scope.cityName;
            $log.log(cityName);
            getWeatherByCity();
        }

        var vm = this;
        

        function getWeatherByCity() {
            return CityService.getWeatherByCity().then(function(data){
                vm.title = data;
                $log.log(vm.title);
            })
        }
    }

  

}) ();
