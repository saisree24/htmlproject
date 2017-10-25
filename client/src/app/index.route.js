(function() {
  'use strict';

  angular
    .module('lmsApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/modules/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('lms', {
        abstract: true,
        reload: true,
        url: '',
        templateUrl: 'app/modules/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('lms.subjects', {
        url: '/subjects',
        templateUrl: 'app/common/subjects/subjects.html',
        controller: 'subjectsController',
        controllerAs: 'subjects'
      })
      .state('lms.chapters', {
        url: '/chapters',
        templateUrl: 'app/common/chapters/chapters.html',
        controller: 'chaptersController',
        controllerAs: 'chapters'
      })
      .state('lms.schoolplan', {
        url: '/schoolplan',
        templateUrl: 'app/modules/schoolplan/schoolplan.html',
        controller: 'schoolplanController',
        controllerAs: 'schoolplan'
      })
      .state('lms.schoolplan.details', {
        url: '/schoolplan/:name',
        templateUrl: 'app/common/resourcelist/resourcecard.html',
        controller: 'schoolplanController',
        controllerAs: 'schoolplan'
      })
      .state('lms.studyplan', {
        url: '/studyplan',
        templateUrl: 'app/modules/studyplan/studyplan.html',
        controller: 'studyplanController',
        controllerAs: 'studyplan'
      })
      .state('lms.socialview', {
        url: '/socialview',
        templateUrl: 'app/modules/socialview/socialview.html',
        controller: 'socialviewController',
        controllerAs: 'socialview'
      })
      .state('lms.analytics', {
        url: '/analytics',
        templateUrl: 'app/modules/analytics/analytics.html',
        controller: 'analyticsController',
        controllerAs: 'analytics'
      });


    $urlRouterProvider.otherwise('/login');
  }

})();
