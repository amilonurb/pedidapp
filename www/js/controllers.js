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

angular.module('starter').controller('DetalheController', function($scope, produtosService, $stateParams) {
    produtosService.lista().then($scope, function(dados) {
        $scope.bolo = dados[$stateParams.boloID];
    });
});

angular.module('starter').controller('PedidoController', function($scope, produtosService, $stateParams, $http) {
    produtosService.lista().then($scope, function(dados) {
        $scope.bolos = dados[$stateParams.boloID];
    });

    $scope.dados = {};

    $scope.fecharPedido = function() {

        $ionicLoading.show();

        $http.get('http://cozinhapp.sergiolopes.org/novo-pedido', {
            
            params: {
                pedido: $scope.bolo.nome,
                info: $scope.dados.nome + ' (' + $scope.dados.telefone + ') - ' + $scope.dados.endereco
            }

        }).then(function() {

            $ionicPopup.alert({
                title: 'Pedido confirmado',
                template: 'Daqui a pouco chega :)'
            }).then(function() {
                $state.go('home');
            });

        }).catch(function(erro) {

            $ionicPopup.alert({
                title: 'Erro no pedido',
                template: erro.data + '. Deu ruim!'
            });

        }).finally(function() {
            $ionicLoading.hide();
        });
    };
});