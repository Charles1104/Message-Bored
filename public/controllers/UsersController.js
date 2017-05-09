
angular.module('app')
.controller('UsersCtrl', [
  '$scope',
  'UsersService',
  function($scope, UsersService){

    UsersService.getUsers()
      .then((users) => {
        $scope.users = users.data;
      });
  }
]);


