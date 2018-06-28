//  example of what you can do with weather service 
//  i.e. call the API 
//  get data 
//  store in array 
//  then ng- ng repeat 
//  use fn declarations 
//  following Jonh Papa 

function weatherController(weatherService) {
    var vm = this;
    vm.forecasts = [];
    vm.getWeather = getWeather;
    vm.title = 'Weather';
    //  move this to service 
var req = {
    method: 'GET',
    url: '',
    headers: {
        'x-api-key': '72f5cf872643336bf96167d5dda813cf'
    }
}

    activate();

    function activate() {
        return getWeather().then(function(){
            console.log('activated Weather View');
        });
    }

    function getWeather() {
        return weatherService.getWeather().then(function(data) {
            vm.forecasts = data;
            return vm.forecasts;
        });
    }
}
    



