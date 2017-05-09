/*jshint esversion: 6 */

angular.module('app')
.controller('LatestCtrl', [
  '$scope',
  'MessagesService',
  function($scope, MessagesService){

    MessagesService.getLatestMessages()
      .then((messages) => {
        console.log(messages.data);
        $scope.messages = messages.data;
      });
  }
]);

