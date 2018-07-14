(function() {
    'use strict';

   
    angular

        .config(configure);

    function configure($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                main: {
                    templateUrl: '/pages/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'homeCtrl'
                }
            }
        });
    }
    // I don't think i need this 
})();