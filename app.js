var matrix={
  "EUR-EUR":1,
  "EUR-USD":1.2,
  "EUR-GBP":0.71,
  "USD-EUR":0.83,
  "USD-USD":1,
  "USD-GBP":0.59,
  "GBP-EUR":1.4,
  "GBP-USD":1.68,
  "GBP-GBP":1
};

angular.module('cambioDivisaApp', [])
.controller('CambioDivisaController', ['$scope',function($scope){
  $scope.divisaOptions =[
    {codi: "EUR", nom:"Euro"},
    {codi: "USD", nom:"Dolar USA"},
    {codi: "GBP", nom:"Lliura Esterlina"}
  ];
    $scope.divisaValorOrigen = 0;
    $scope.divisaOrigen = {codi: "EUR", nom:"Euro"};
    $scope.divisaDesti = {codi: "USD", nom:"Dolar USA"};
    $scope.change = function(){ $scope.divisaValorCalculat=matrix[$scope.divisaOrigen.codi+'-'+$scope.divisaDesti.codi] * $scope.divisaValorOrigen};

}]);
