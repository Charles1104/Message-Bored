angular.module('app')
.controller('LoginCtrl', [
  '$rootScope',
  '$scope',
  '$location',
  'UsersService',
  function($rootScope,$scope, $location, UsersService){

  $scope.checkUser = function(id) {
      UsersService.getUser(id)
      .then(logger =>{
        localStorage.setItem('user', logger.data.name);
        localStorage.setItem('user_id', logger.data.id);
        $rootScope.user = logger.data.name;
        $rootScope.loggedIn = true;
        $location.url("/");
      })
      .catch(err => {
        $scope.id='';
        $scope.error = "Please enter a valid username or ID";
      });
  };

  $scope.logOutUser = function() {
    delete $rootScope.user;
    localStorage.clear();
    $rootScope.loggedIn = false;
  };

  $scope.getUsername = function(){
    return $rootScope.user;
  };

  }
]);