var app = angular.module("Controller", ["ngAnimate"]);

    app.controller("AvengersCtrl",["$scope","$location",function($scope,$location)
    { 
           var technology=[];
                       $scope.extra =extra
           console.log(extra.length)
           for(i=0;i<extra.length;i++){
            console.log(extra[i]);
           }
        for(i=0;i<robos.length;i++){
            technology.push.apply(technology,robos[i].technology);
        }

        $scope.technology=technology;
        console.log($scope.technology);
         var job=[];
        for(i=0;i<robos.length;i++){
            job.push.apply(job,robos[i].job);
        }

        $scope.job=job;
        console.log($scope.job);
   var Locomotion=[];
        for(i=0;i<robos.length;i++){
            Locomotion.push.apply(Locomotion,robos[i].locomotion);
        }

        $scope.Locomotion=Locomotion;
        console.log($scope.Locomotion);
   
        $scope.association=robos;
 
  /*
$scope.trackfunction=function(arr,$scope){


    $scope.u={};
     $scope.a = [1,2,3];
    for(var i = 0, l = arr.length; i < l; ++i){
        if(!u.hasOwnProperty(arr[i])) {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
}

*/

var filterByTechnology=[];// contains the filter constraints
        var filterByJob=[];
         var filterByLocomotion=[];
        $scope.items= [];
        $scope.items= $scope.association;
    $scope.filterByTechnology=function(t,checkBoxVal)
    {
        console.log(t)

        console.log(checkBoxVal);
        if(checkBoxVal)//to check whether check box is checked or not
        {console.log(filterByTechnology);
            filterByTechnology.push(t)
        }
        else
        { console.log(filterByTechnology);
            filterByTechnology=_.reject(filterByTechnology,function(tech){return t==tech })
        }
        console.log(filterByTechnology);
        $scope.filterContentByTechnology();

    }




$scope.filterByJob=function(t,checkBoxVal)
{
    console.log(t.job)


    console.log(checkBoxVal);
    if(checkBoxVal)//to check wheather check box is checked or not
    {
        filterByJob.push(t)
    }

    else
    {
        filterByJob=_.reject(filterByJob,function(job){return t==job })//_reject is used to remove
    }
console.log(filterByJob);
    $scope.filterContentByTechnology();
}

$scope.filterByLocomotion=function(t,checkBoxVal){
    if(checkBoxVal){
        filterByLocomotion.push(t)
        console.log(filterByLocomotion);

    }
     else
    {
        filterByLocomotion=_.reject(filterByLocomotion,function(Locomotion){return t==Locomotion })
           console.log(filterByLocomotion);//_reject is used to remove
    }
     $scope.filterContentByTechnology();
}



        $scope.filterContentByTechnology=function() {
            //contains the filtered results. we are reinstalling it for each search
            $scope.items= [];

            _.each(filterByTechnology, function (fil) {//_each is like for loop/ filterByis array and fil is an element of filterByTechnology just like filterByTechnology[0]  filterByTechnology[1] n soo on

                _.each($scope.association, function (assoc) {// similiarly assoc is element of assocaiton
                    console.log(assoc.technology);
                    console.log(fil)
                    for(var i in assoc.technology){//This loop is to check objects of  Technology  Array
                    if (fil == assoc.technology[i]) {
                        $scope.items.push(assoc);
                        console.log(assoc);
                    }

                        }

                })


            })
            $scope.items= _.uniq($scope.items)//removing duplicates
            console.log(filterByTechnology.length)
            if(filterByTechnology.length==0)
            {
                $scope.items= $scope.association;
            }

            if(filterByJob.length!=0)// this section runs if we have checked any price
            {

                var items=$scope.items;
                $scope.items=[];

                _.each(filterByJob, function (fil) {//_each is like for loop/ filterByis array and fil is an element of filterByTechnology just like filterByTechnology[0]  filterByTechnology[1] n soo on
                    console.log(fil)
                    _.each(items, function (item) {
                    // similiarly assoc is element of assocaiton

                        for(var i in item.job)

                        if (fil == item.job[i]) {
                            console.log("glll")
                            $scope.items.push(item);
                        }



                    })


                })
                console.log($scope.items)
                $scope.items= _.uniq($scope.items)//removing duplicates


            } 
     //Locomotion
     if(filterByLocomotion.length!=0)// this section runs if we have checked any locomotion
            {
                console.log($scope.items)
                var items=$scope.items;
                $scope.items=[];
                
                _.each(filterByLocomotion, function (fil) {//_each is like for loop/ filterByis array and fil is an element of filterByTechnology just like filterByTechnology[0]  filterByTechnology[1] n soo on
                    console.log(fil);
                    _.each(items, function (item) {// similiarly assoc is element of assocaiton
                       for(var i in item.locomotion){
                        console.log(item)
                            console.log(item.locomotion[i])
                        if (fil == item.locomotion[i]) {
                            console.log("glll")
                            $scope.items.push(item);
                        }

                         }

                    })


                })
                console.log($scope.items)
                $scope.items= _.uniq($scope.items)//removing duplicates


            } 

              
        }

 console.log($location);
            console.log("hello");
            console.log(technology);
            $scope.check=function(ev){
                console.log(ev);

                for(i=0;i<technology.length;i++)
                { 
                    console.log(filterByTechnology[i])
                    if(ev==technology[i]){
                        checkBoxVal=true;
                         
                    }
                }
            }
          $scope.checkid=function(ev){
           
                for(var i=0;i<=$scope.association.length;i++){
                    console.log($scope.association[i])
                    for(var i in $scope.association[i]){
                     
                    }

                }
          }  
          $scope.me=Boolean(false);
          $scope.search=function(t){
                  var t=t.toLowerCase();
            for(i=0;i<technology.length;i++){
                if(technology[i]==t){
              $scope.me=Boolean(false);
           $location.path('/filterpage').search('foo', t); 
                break;
                 console.log($scope.me);
                }
                else{

                $scope.me=Boolean(true);
                }
            }
          
                     }
      
      for(i=0;i<technology.length;i++){
         if($location.search().foo==technology[i]){
            $scope.filterByTechnology($location.search().foo,true)
           
          angular.element($($location.search().foo)).selector
        }
      }
         
      for(i=0;i<job.length;i++){
         if($location.search().foo==job[i]){
            $scope.filterByJob($location.search().foo,true)
        }
      }

      for(i=0;i<Locomotion.length;i++){
         if($location.search().foo==Locomotion[i]){
            $scope.filterByLocomotion($location.search().foo,true)
        }
      } 

}])



