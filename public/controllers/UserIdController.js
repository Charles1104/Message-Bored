angular.module('app')
.controller('UsersIdCtrl', [
  '$scope',
  'UsersService',
  'MessagesService',
  function($scope, UsersService, MessagesService){

    UsersService.getUser(window.location.href.slice(window.location.href.lastIndexOf('/')+1))
    .then((user) => {
      $scope.user = user.data;
      $scope.date = user.data.createdAt;
      $scope.messages = user.data.Author;
    });

  }
]);