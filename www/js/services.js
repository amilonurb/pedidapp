angular.module('starter').service('produtosService', function($http, $q) {
    var url = 'http://cozinhapp.sergiolopes.org/produtos';
    return {
        lista: function() {
            return $http.get(url).then(function(response) {
                return response.data;
            });
        }
    };
});