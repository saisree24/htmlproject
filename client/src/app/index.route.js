(function() {
  'use strict';

  angular
    .module('nextHealthCare')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/modules/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/modules/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .state('dashboard.home', {
        url: '/home',
        templateUrl: 'app/modules/dashboard/home.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .state('dashboard.addstudent', {
        url: '/addstudent',
        templateUrl: 'app/modules/student/addstudent.html',
        controller: 'StudentController',
        controllerAs: 'student'
      })
      .state('dashboard.student', {
        url: '/student',
        templateUrl: 'app/modules/student/studentbmi.html',
        controller: 'StudentbmiController',
        controllerAs: 'studentbmi'
      })
      
      .state('dashboard.studentlist', {
        url: '/studentlist',
        templateUrl: 'app/modules/student/studentlist/studentlist.html',
        controller: 'StudentbmiController',
        controllerAs: 'studentlist'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
