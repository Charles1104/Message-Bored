angular.module('app')
.controller('TopicsCtrl', [
  '$scope',
  '$rootScope',
  '$location',
  'TopicsService',
  function($scope,$rootScope,$location,TopicsService){

    $scope.createTopic = function(name) {

      TopicsService.registerTopic(name)
        .then(data =>{
          $location.url("/");
        });
    };

    $scope.loadTopics = function(){
      TopicsService.getTopics()
        .then((topics) => {
          $scope.topics = topics.data;
        });
    };

    $scope.loadTopic = function() {
      TopicsService.getTopic(window.location.href.slice(window.location.href.lastIndexOf('/')+1))
        .then((topic) => {
        $scope.topic = topic.data;
        localStorage.setItem('topic_id', topic.data.id);
        });
      };
    }
]);

