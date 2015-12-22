var app = angular.module("Controller", ["ngAnimate"]);

    app.controller("AvengersCtrl",["$scope",function($scope)
    {
           var technology=[];
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
                    if (fil == assoc.technology) {
                        $scope.items.push(assoc);
                        console.log(assoc);
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
                    _.each(items, function (item) {// similiarly assoc is element of assocaiton
                        if (fil == item.job) {
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
                        if (fil == item.Locomotion) {
                            console.log("glll")
                            $scope.items.push(item);
                        }



                    })


                })
                console.log($scope.items)
                $scope.items= _.uniq($scope.items)//removing duplicates


            } 

              
        }



            console.log($scope.items)

}])



