angular.module('app')
.controller('LoginCtrl', [
  '$rootScope',
  '$scope',
  '$location',
  'UsersService',
  function($rootScope,$scope, $location, UsersService){

  $scope.checkUser = function(id) {
    console.log(id);
    if(id === '') {
      $scope.id = 'Enter Login ID';
      return;
    } else {
      UsersService.getUser(id)
      .then(logger =>{
        localStorage.setItem('user', logger.data.name);
        localStorage.setItem('user_id', logger.data.id);
        location.reload();
      })
      .catch(err => {
      console.log(err);
      });
    }
  };

  $scope.logOutUser = function() {
    delete $rootScope.user;
    localStorage.clear();
    location.reload();
  };

  $scope.redirect = function(){
    $location.url('/');
  };

  }
]);