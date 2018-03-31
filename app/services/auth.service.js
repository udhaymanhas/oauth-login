app.service('auth', function($window, $location) {
    var auth = this;

    auth.saveToken = function(data) {
        $window.localStorage['jwtToken'] = data.token;
        $window.localStorage.refreshToken = data.refreshToken;
        $window.localStorage.tokenExpiryTime = data.tokenExpiryTime;
    }
    auth.getToken = function() {
        return $window.localStorage.jwtToken;
    };
    auth.isTokenValid = function() {
      var currentTime = new Date().getTime();
      if ($window.localStorage.jwtToken && $window.localStorage.refreshToken && currentTime < $window.localStorage.tokenExpiryTime){
        return true;
      }
      else {
        return false;
      }
    };

    auth.logout = function() {
      $window.localStorage.removeItem('jwtToken');
      $window.localStorage.removeItem('refreshToken');
      $window.localStorage.removeItem('tokenExpiryTime');

      $location.path('/');
    };
});
