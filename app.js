/**
 * Created by Nate on 10/24/2015.
 */
var app = angular.module('bpfApp', [
    'ngRoute',
    'ngMaterial'
]);

/** Routing information for the various views */
app.config(['$routeProvider', '$mdThemingProvider', function($routeProvider, $mdThemingProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'components/home/homeView.html'
        }).
        when('/about', {
            templateUrl: 'components/about/aboutView.html'
        }).
        when('/contact', {
            templateUrl: 'components/contact/contactView.html'
        }).
        when ('/leadership', {
            templateUrl: 'components/leadership/leadershipView.html'
        }).
        when ('/parenting', {
        templateUrl: 'components/parenting/parentingView.html'
        }).
        when ('/bostonbasics', {
        templateUrl: 'components/bostonbasics/bostonbasicsView.html'
        }).
        otherwise({
           redirectTo: '/home'
        });

    $mdThemingProvider.theme('default')
        .primaryPalette('blue');
}]);

