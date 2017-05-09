/*jshint esversion: 6 */

angular.module('app')
.controller('LatestCtrl', [
  '$scope',
  'MessagesService',
  function($scope, MessagesService){

    MessagesService.getLatestMessages()
      .then((messages) => {
        $scope.messages = messages.data;
      });
  }
]);

