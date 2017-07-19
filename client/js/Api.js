myApp.factory('Api', ['$resource', function($resource){
    return {
        Customer: $resource('/api/favorite/:id', {id: '@id'})
    }
}]);