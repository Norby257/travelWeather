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
            $log.log($scope.cityName);
            return cityName;
            // getWeatherByCity();
        }

        var vm = this;

        // getWeatherByCity();
        //  error message cityName is not defined 
        //  at city.service js 14 
        //  controller pass to service or service pass to controller? 
        

        function getWeatherByCity() {
            
            return CityService.getWeatherByCity().then(function(data){
                vm.title = data;
                $log.log(vm.title);
            })
        }
    }

  

}) ();
