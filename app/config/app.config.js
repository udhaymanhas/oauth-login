app.config(['$stateProvider','$httpProvider', '$urlRouterProvider',function($stateProvider, $httpProvider, $urlRouterProvider){

  $urlRouterProvider
    .otherwise('/login');

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: '../views/login/login.html',
      controller: 'LoginController'
    })
    .state('home', {
      url: "/home",
      templateUrl: '../views/home/home.html',
      controller: 'HomeController'
    })

}])
