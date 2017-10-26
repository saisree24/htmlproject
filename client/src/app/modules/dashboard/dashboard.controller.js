(function() {
  'use strict';

  angular.module('nextHealthCare')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($scope,$timeout,$mdMedia,$state) {

    $scope.pageTitle = 'Page Name';
    $scope.isOpen = false;
    $scope.$mdMedia = $mdMedia;
    $scope.timeoutinc = 150;
  }
})();
