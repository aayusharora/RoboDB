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

   if($routeParams._id==undefined){
    $http.get('JSON/561cf518cb8ba1268913141f.json').
    success(function(data, status, headers, config) {

      $scope.robo = data;

      console.log("hello");
    }).
    error(function(data, status, headers, config) {
     console.log("error");
    });
   }
   else{
      console.log($routeParams._id);
 /* $http.get('JSON/'+$routeParams._id+'.json').
    success(function(data, status, headers, config) {

      $scope.robo = data;

      console.log("hello");
    }).
    error(function(data, status, headers, config) {
     console.log("error");
    });*/


for(i=0;i<robos.length;i++){
  if(robos[i]._id==$routeParams._id){
    $scope.robots=robos[i];

  }
   console.log(robos[i]._id);
   console.log($routeParams._id);
}
  }
});

