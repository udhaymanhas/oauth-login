app.controller('LoginController',['$scope',function($scope){

  $scope.submitProgress = false;

  $scope.submit = function(){
    $scope.submitProgress = true;
    console.log($scope.login)
  }
}]);
