/*jshint esversion: 6 */

angular.module('app')
.service('MessagesService', ['$http', function($http) {

  return{
    getLatestMessages: function() {
      return $http.get(`/api/messages/latest`);
    },
    getMessagesById: function(id) {
      return $http.get(`/api/messages/${id}`);
    },
    createMessage: function(body) {
      let newMessage = {};
      newMessage.body = body;
      newMessage.author_id = localStorage.user_id;
      newMessage.topic_id = localStorage.topic_id;
      return $http.post(`/api/messages/`, newMessage);
    }

  };
}]);
