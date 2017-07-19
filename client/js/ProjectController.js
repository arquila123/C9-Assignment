myApp.controller('projectsController', ['$scope', 'Api', function($scope){
    $scope.form = {};
    
    $scope.addToDatabase = function(){
        Api.Favorite.save({}, $scope.form, function(){
            $scope.form = {};
        })
    }
    
}]);
