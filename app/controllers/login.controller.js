app.controller('LoginController',['$scope','user','$state',function($scope, user, $state){

  $scope.submitProgress = false;

  $scope.submit = function(){
    $scope.submitProgress = true;
    var data = {
      type:'form',
      username:$scope.user.username,
      password:$scope.user.password
    }

    user.login(data)
      .then(function(){
        $state.go('/home')
      })
      .catch(function(){
        console.log('Auth API Not Found');
        $scope.submitProgress = false;
      })
  }
}]);
