angular.module('starter').controller('HomeController', function ($scope, produtosService) {
    /*$scope.bolos = [
        { nome: "Só de Cenoura", preco: 18 },
        { nome: "Nutella", preco: 29 },
        { nome: "Brigadeiro", preco: 24 },
        { nome: "Açucarado", preco: 19 },
    ];*/

    produtosService.lista().then($scope, function(dados) {
        $scope.bolos = dados;
    });
});