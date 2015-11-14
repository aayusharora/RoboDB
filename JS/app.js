var app=angular.module('myApp', ['ngRoute','myController','Controller'])
app.config(['$routeProvider', function($routeProvider) {
$routeProvider

.when('/', {
templateUrl: 'filterpage.html',
controller:'AvengersCtrl'
})
.when('/robo', {
templateUrl: 'robo.html',
controller:'robocontroller'
})
.when('/:_id', {
templateUrl: 'robo.html',
controller:'robocontroller'
})

}]);