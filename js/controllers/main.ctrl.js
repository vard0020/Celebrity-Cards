angular.module('Booya')

.controller('MainCtrl', function($scope, $http, Items) {
    //fetch all the data from the JSON file and display it
    $scope.allData;
    
   // $http({method:'GET', url:'data/items.json'})
    Items.getAll()
    .then(function(response){
        //successs
        $scope.allData = response.data;
        
    }, function(response){
        //error
        
    });
});