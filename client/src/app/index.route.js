(function() {
  'use strict';

  angular
    .module('nextHealthCare')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {   
        url: '',
        templateUrl: 'app/modules/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('home.login', {        
        url: '/login',
        templateUrl: 'app/modules/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('home.dashboard', { 
        abstract: true,  
        url: '/dashboard',
        templateUrl: 'app/modules/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .state('home.dashboard.subjects', {
        url: '/subjects',
        templateUrl: 'app/common/subjects/subjects.html',
        controller: 'subjectsController',
        controllerAs: 'subjects'
      })
      .state('home.dashboard.chapters', {
        url: '/chapters',
        templateUrl: 'app/common/chapters/chapters.html',
        controller: 'chaptersController',
        controllerAs: 'chapters'
      })
      .state('home.dashboard.schoolplan', {
        url: '/schoolplan',
        templateUrl: 'app/modules/schoolplan/schoolplan.html',
        controller: 'schoolplanController',
        controllerAs: 'schoolplan'
      })
      .state('home.dashboard.schoolplan.details', {
        url: '/schoolplan/:name',
        templateUrl: 'app/common/resourcelist/resourcecard.html',
        controller: 'schoolplanController',
        controllerAs: 'schoolplan'
      })
      .state('home.dashboard.studyplan', {
        url: '/studyplan',
        templateUrl: 'app/modules/studyplan/studyplan.html',
        controller: 'studyplanController',
        controllerAs: 'studyplan'
      })
      .state('home.dashboard.socialview', {
        url: '/socialview',
        templateUrl: 'app/modules/socialview/socialview.html',
        controller: 'socialviewController',
        controllerAs: 'socialview'
      })
      .state('home.dashboard.analytics', {
        url: '/analytics',
        templateUrl: 'app/modules/analytics/analytics.html',
        controller: 'analyticsController',
        controllerAs: 'analytics'
      });


    $urlRouterProvider.otherwise('/login');
  }

})();
