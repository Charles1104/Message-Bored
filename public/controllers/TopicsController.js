angular.module('app')
.controller('TopicsCtrl', [
  '$scope',
  'TopicsService',
  function($scope, TopicsService){

    $scope.createTopic = function(name) {

      TopicsService.registerTopic(name)
      .then(data =>{
        console.log(data);
      });
    };

    TopicsService.getTopics()
      .then((topics) => {
        $scope.topics = topics.data;
      });

    TopicsService.getTopic(window.location.href.slice(window.location.href.lastIndexOf('/')+1))
      .then((topic) => {
      $scope.topic = topic.data;
    });
  }
]);

