/*jshint esversion: 6 */

angular.module('app')
.service('UsersService', ['$http', function($http) {

  return{
    getUser: function(id) {
      return $http.get(`/api/users/${id}`);
    },

    getUsers: function() {
      return $http.get(`/api/users/`);
    },

    registerUser: function(name) {
      return $http.post(`/api/users/`,name);
    }

  };
}]);