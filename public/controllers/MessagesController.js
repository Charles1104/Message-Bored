/*jshint esversion: 6 */

angular.module('app')
.controller('MessagesCtrl', [
  '$scope',
  '$location',
  'MessagesService',
  function($scope, $location, MessagesService){

    MessagesService.getLatestMessages()
      .then((messages) => {
        $scope.messages = messages.data;
      });

    $scope.generateMessage = function(body) {
      MessagesService.createMessage(body)
        .then(data =>{
          $location.url(`/topics/${localStorage.topic_id}`);
        });
    };
  }
]);

