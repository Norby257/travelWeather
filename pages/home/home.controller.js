//  wrapping code in IIFE 

(function() {
    'use strict';

    angular.module('home').controller('HomeController', HomeController, );

    function HomeController() {
        var vm = this;
        //  more will be added here 
    }
})();