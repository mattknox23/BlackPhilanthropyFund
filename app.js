/**
 * Created by Nate on 10/24/2015.
 */
var app = angular.module('bpfApp', [
    'ui.router',
    'ngMaterial'
]);

/** Routing information for the various views */
app.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'components/home/homeView.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'components/about/aboutView.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'components/contact/contactView.html'
        })
        .state('leadership', {
            url: '/leadership',
            templateUrl: 'components/leadership/leadershipView.html'
        })
        .state('parenting', {
            url: '/parenting',
            templateUrl: 'components/parenting/parentingView.html'
        })
        .state('bostonbasics', {
            url: '/bostonbasics',
            templateUrl: 'components/bostonbasics/bostonbasicsView.html'
        })

    $mdThemingProvider.theme('default')
        .primaryPalette('blue');
}]);

app.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
    //initialize Google Analytics
    $window.ga('create', 'UA-74245045-2', 'auto');

    //track pageview on state change
    $rootScope.$on('$stateChangeSuccess', function (event){
        $window.ga('send', 'pageview', $location.path());
    });
}]);

