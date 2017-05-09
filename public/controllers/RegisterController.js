angular.module('app')
.controller('RegisterCtrl', [
  '$scope',
  'UsersService',
  function($scope, UsersService){

    $scope.UsersService = UsersService;

    $scope.createUser = function(name) {
      var newUser = {
        name: name
      };

      UsersService.registerUser(newUser)
      .then(data =>{
        console.log(data);
      });
    };
  }
]);