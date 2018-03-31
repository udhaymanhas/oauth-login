//Intercept http request, attach token.
//Intercept http response, if token found save token.
app.factory('httpInterceptor', function(API, auth) {
  return {
    request: function(req) {
                  var token = auth.getToken();
                  if (req.url.indexOf(API) === 0 && token) {
                      req.headers['my-access-token'] = token;
                  }
                  return req;
              },
    response: function(res) {
                if(res.config.url.indexOf(API) === 0 && res.data.token) {
                  auth.saveToken(res.data); //when we get token in data i.e. on login or refreshing token
                }
                else
                if(res.config.url.indexOf(API) === 0 && res.data.code === 210) {
                  auth.logout(); //unauthorized call , logout
                }
                return res;
              }
  }
});
