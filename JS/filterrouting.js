var app=angular.module('myApp', ['ngRoute','myController'])
app.config(['$routeProvider', function($routeProvider) {
$routeProvider
.when('/', {
templateUrl: 'filterpage.html',
controller:'AvengersCtrl'
})
.when('/:technology', {
templateUrl: 'filterhtml.html',
controller:'AvengersCtrl'
})
}]);