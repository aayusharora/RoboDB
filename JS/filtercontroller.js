var app = angular.module("Controller", ["ngAnimate"]);

    app.controller("AvengersCtrl",["$scope",function($scope)
    {
  $scope.technology = [
    { name: "aero",index:0},
    { name: "123F",index:1},
    { name: "green1",index:2},
    { name: "Ygf",index:3},
    { name: "aero1",index:4},
    { name: "Purplet",index:5}]
    $scope.job=[

    { job: 'A' ,index:0 },//index is for dynamically creating id's
        {job: 'B',index:1},
        {job: 'C',index:2},
    { job: 'D',index:3},
    { job: 'E',index:4},
    { job: 'F',index:5},
    { job: 'G',index:6},
    { job: 'H',index:7}
  ];
$scope.Locomotion=[

    { Locomotion:"Walking" ,index:0 },
        { Locomotion:"Spinning",index:1},
        { Locomotion:"Leaning",index:2},
   
  ];
  $scope.association=[
    {name:"aero", job: 'A',_id:"561cf518cb8ba1268913141f",Locomotion:"Walking"},
      {name:"aero", job: 'B',_id:"561cf518cb8ba1268913141g",Locomotion:"Spinning"
  },
   {name:"123F", job: 'G',_id:"561cf518cb8ba1268913141g",Locomotion:"Spinning"
  },
      {name:"aero", job: 'C',_id:"561cf518cb8ba1268913141h",Locomotion:"Leaning"},
    { name:"123F",job: 'E',_id:"561cf518cb8ba1268913141i",Locomotion:"Walking"},
      { name:"123F",job: 'A',_id:"561cf518cb8ba1268913141j",Locomotion:"Spinning"},
    { name:"green1",job: 'F',_id:"561cf518cb8ba1268913141k",Locomotion:"Spinning"},
    {name:"Ygf",job: 'C',_id:"561cf518cb8ba1268913141l",Locomotion:"Spinning"},
    {name:"aero1",job: 'D',_id:"561cf518cb8ba1268913141m",Locomotion:"Spinning"},
    { name:"Purplet",job: 'H',_id:"561cf518cb8ba1268913141n",Locomotion:"Spinning"}

  ];
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
        console.log(t.name)

        console.log(checkBoxVal);
        if(checkBoxVal)//to check whether check box is checked or not
        {console.log(filterByTechnology);
            filterByTechnology.push(t.name)
        }
        else
        { console.log(filterByTechnology);
            filterByTechnology=_.reject(filterByTechnology,function(tech){return t.name==tech })
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
        filterByJob.push(t.job)
    }

    else
    {
        filterByJob=_.reject(filterByJob,function(job){return t.job==job })//_reject is used to remove
    }
console.log(filterByJob);
    $scope.filterContentByTechnology();
}

$scope.filterByLocomotion=function(t,checkBoxVal){
    if(checkBoxVal){
        filterByLocomotion.push(t.Locomotion)
        console.log(filterByLocomotion);

    }
     else
    {
        filterByLocomotion=_.reject(filterByLocomotion,function(Locomotion){return t.Locomotion==Locomotion })
           console.log(filterByLocomotion);//_reject is used to remove
    }
     $scope.filterContentByTechnology();
}



        $scope.filterContentByTechnology=function() {
            //contains the filtered results. we are reinstalling it for each search
            $scope.items= [];

            _.each(filterByTechnology, function (fil) {//_each is like for loop/ filterByis array and fil is an element of filterByTechnology just like filterByTechnology[0]  filterByTechnology[1] n soo on

                _.each($scope.association, function (assoc) {// similiarly assoc is element of assocaiton
                    if (fil == assoc.name) {
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



