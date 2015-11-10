var app = angular.module("myController", ["ngAnimate"]);

    app.controller("AvengersCtrl",["$scope",function($scope)
    {
  $scope.technology = [
    { name: "aero",index:0},
    { name: "aeroies",index:1},
    { name: "green1",index:2},
    { name: "Ygf",index:3},
    { name: "aero1",index:4},
    { name: "Purplet",index:5}]
    $scope.price=[

    { price: 1000 ,index:0 },
        { price: 1100,index:1},
        { price: 1200,index:2},
    { price: 2000,index:3},
    { price: 4000,index:4},
    { price: 5000,index:5},
    { price: 9000 ,index:6},
    { price: 10000,index:7}
  ];

  $scope.association=[
    {name:"aero", price: 1000},
      {name:"aero", price: 1100},
      {name:"aero", price: 1200},
    { name:"aeroies",price: 1000},
      { name:"aeroies",price: 1100},
    { name:"green1",price: 4000},
    {name:"Ygf",price: 5000},
    {name:"aero1",price: 9000},
    { name:"Purplet",price: 10000}

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
        var filterByPrice=[];
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




$scope.filterByPrice=function(t,checkBoxVal)
{
    console.log(t.price)


    console.log(checkBoxVal);
    if(checkBoxVal)//to check wheather check box is checked or not
    {
        filterByPrice.push(t.price)
    }

    else
    {
        filterByPrice=_.reject(filterByPrice,function(price){return t.price==price })//_reject is used to remove
    }
console.log(filterByPrice);
    $scope.filterContentByTechnology();
}





        $scope.filterContentByTechnology=function() {
            //contains the filtered results. we are reinstalling it for each search
            $scope.items= [];

            _.each(filterByTechnology, function (fil) {//_each is like for loop/ filterByis array and fil is an element of filterByTechnology just like filterByTechnology[0]  filterByTechnology[1] n soo on

                _.each($scope.association, function (assoc) {// similiarly assoc is element of assocaiton
                    if (fil == assoc.name) {
                        $scope.items.push(assoc);
                    }



                })


            })
            console.log($scope.items)
            $scope.items= _.uniq($scope.items)//removing duplicates
            console.log(filterByTechnology.length)
            if(filterByTechnology.length==0)
            {
                $scope.items= $scope.association;
            }

            if(filterByPrice.length!=0)// this section runs if we have checked any price
            {

                var items=$scope.items;
                $scope.items=[];

                _.each(filterByPrice, function (fil) {//_each is like for loop/ filterByis array and fil is an element of filterByTechnology just like filterByTechnology[0]  filterByTechnology[1] n soo on
                    console.log(fil)
                    _.each(items, function (item) {// similiarly assoc is element of assocaiton
                        if (fil == item.price) {
                            console.log("glll")
                            $scope.items.push(item);
                        }



                    })


                })
                console.log($scope.items)
                $scope.items= _.uniq($scope.items)//removing duplicates


            }
        }




}])



