/*jshint esversion: 6 */

angular.module('app')
.service('TopicsService', ['$http', function($http) {

  return{
    getTopic: function(id) {
      return $http.get(`/api/topics/${id}`);
    },

    getTopics: function() {
      return $http.get(`/api/topics/`);
    },

    registerTopic: function(newTopic) {
      return $http.post(`/api/topics/`,newTopic);
    }

  };
}]);
