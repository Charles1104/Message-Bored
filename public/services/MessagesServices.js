/*jshint esversion: 6 */

angular.module('app')
.service('MessagesService', ['$http', function($http) {

  return{
    getLatestMessages: function() {
      return $http.get(`/api/messages/latest`);
    },
    getMessagesById: function(id) {
      return $http.get(`/api/messages/${id}`);
    }

  };
}]);
