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

      .state('dashboard.student', {
        url: '/student',
        templateUrl: 'app/modules/student/studentbmi.html',
        controller: 'StudentbmiController',
        controllerAs: 'studentbmi'
      });
      // .state('dashboard.subjects', {
      //   url: '/subjects',
      //   templateUrl: 'app/common/subjects/subjects.html',
      //   controller: 'subjectsController',
      //   controllerAs: 'subjects'
      // })
      // .state('dashboard.chapters', {
      //   url: '/chapters',
      //   templateUrl: 'app/common/chapters/chapters.html',
      //   controller: 'chaptersController',
      //   controllerAs: 'chapters'
      // })
      // .state('dashboard.schoolplan', {
      //   url: '/schoolplan',
      //   templateUrl: 'app/modules/schoolplan/schoolplan.html',
      //   controller: 'schoolplanController',
      //   controllerAs: 'schoolplan'
      // })
      // .state('dashboard.schoolplan.details', {
      //   url: '/schoolplan/:name',
      //   templateUrl: 'app/common/resourcelist/resourcecard.html',
      //   controller: 'schoolplanController',
      //   controllerAs: 'schoolplan'
      // })
      // .state('dashboard.studyplan', {
      //   url: '/studyplan',
      //   templateUrl: 'app/modules/studyplan/studyplan.html',
      //   controller: 'studyplanController',
      //   controllerAs: 'studyplan'
      // })
      // .state('dashboard.socialview', {
      //   url: '/socialview',
      //   templateUrl: 'app/modules/socialview/socialview.html',
      //   controller: 'socialviewController',
      //   controllerAs: 'socialview'
      // })
      // .state('dashboard.analytics', {
      //   url: '/analytics',
      //   templateUrl: 'app/modules/analytics/analytics.html',
      //   controller: 'analyticsController',
      //   controllerAs: 'analytics'
      // });


    $urlRouterProvider.otherwise('/login');
  }

})();
