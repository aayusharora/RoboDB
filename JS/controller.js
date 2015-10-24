/*var app=angular.module("myApp",[])
app.controller("myController",function($scope,$http){

$http.jsonp('datarobo.json').
success(function(data, status, headers, config){
	$scope.robo=data;

}).
error(function(data, status, headers, config){
console.log("error");
});


});*/

var app = angular.module("myController", []);

app.controller("robocontroller", function($scope, $http,$routeParams) {
   if($routeParams.name==undefined){
    $http.get('JSON/datarobo.json').
    success(function(data, status, headers, config) {

      $scope.robo = data;

      console.log("hello");
    }).
    error(function(data, status, headers, config) {
     console.log("error");
    });
   }
   else{
      console.log($routeParams.name);
  $http.get('JSON/'+$routeParams.name+'.json').
    success(function(data, status, headers, config) {

      $scope.robo = data;

      console.log("hello");
    }).
    error(function(data, status, headers, config) {
     console.log("error");
    });
  }
});

