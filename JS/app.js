var app=angular.module('myApp', ['ngRoute','myController'])
app.config(['$routeProvider', function($routeProvider) {
$routeProvider
.when('/', {
templateUrl: 'robo.html',
controller:'robocontroller'
})
.when('/:name', {
templateUrl: 'robo.html',
controller:'robocontroller'
})
}]);