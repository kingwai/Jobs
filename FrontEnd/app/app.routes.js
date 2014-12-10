/**
 * Created by jzhang on 12/7/14.
 */

//Define Routing for app
angular.module('JoBillion').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'app/logged_in.html',
                controller: ''
            }).
            when('/home', {
                templateUrl: 'app/talents/publish.html',
                controller: ''
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

