/* globals angular */

angular.module('app', ['ngRoute'])
  .config([
    '$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){

      $routeProvider
        .when('/', {
          templateUrl: '/templates/home.html',
          controller: 'TopicsCtrl',
          controllerAs: 'users'
        })
        .when('/users', {
          templateUrl: '/templates/users.html',
          controller: 'UsersCtrl',
          controllerAs: 'users'
        })
        .when('/users/:id', {
          templateUrl: '/templates/userId.html',
          controller: 'UsersIdCtrl',
          controllerAs: 'usersId'
        })
        .when('/topics/:id', {
          templateUrl: '/templates/topic.html',
          controller: 'TopicsCtrl',
          controllerAs: 'topics'
        })
        .when('/login', {
          templateUrl: '/templates/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'login'
        })
        .when('/register', {
          templateUrl: '/templates/register.html',
          controller: 'RegisterCtrl',
          controllerAs: 'register'
        })
        .when('/latest', {
          templateUrl: '/templates/latest.html',
          controller: 'MessagesCtrl',
          controllerAs: 'Messages'
        })
        .when('/newtopic', {
          templateUrl: '/templates/newtopic.html',
          controller: 'TopicsCtrl',
          controllerAs: 'topics'
        })
        .when('/newmessage', {
          templateUrl: '/templates/newmessage.html',
          controller: 'MessagesCtrl',
          controllerAs: 'Messages'
        });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }])
    .run(['$rootScope',
    function($rootScope) {
      if (localStorage.user !== undefined) {
        $rootScope.user = localStorage.user;
        $rootScope.user_id = localStorage.user_id;
        $rootScope.loggedIn = true;
      } else {
        $rootScope.loggedIn = false;
      }
    }
    ]);
