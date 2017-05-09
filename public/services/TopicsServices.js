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

    registerTopic: function(name) {
      let newTopic = {};
      newTopic.name = name;
      newTopic.created_by = localStorage.user_id;
      return $http.post(`/api/topics/`,newTopic);
    }

  };
}]);
