app.constant('API', 'https://my.api.com/');

app.config(['$stateProvider','$httpProvider', '$urlRouterProvider',function($stateProvider, $httpProvider, $urlRouterProvider){

  $httpProvider.interceptors.push('httpInterceptor');

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

app.run(function(auth, user, $location) {
  var publicPages = ['/'];

  function redirect(){
    var restrictedPage = publicPages.indexOf($location.path()) === -1;
    console.log(restrictedPage);
    if(restrictedPage && !auth.getToken()){
      //token not present, redirect to index
      $location.path('/login');
    }
    else
    if(restrictedPage && !auth.isTokenValid()){
      //check for token expiry
      user.tokenRenew()
        .then(function(response){
          if(!auth.isTokenValid()){
            return Promise.reject();
          }
        })
        .catch(function(){
          auth.logout();
          $location.path('/index');
        })
    }
    else
    if(restrictedPage){
      $location.path('/login');
    }
  }
  
  redirect();
});
