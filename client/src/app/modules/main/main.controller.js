(function() {
  'use strict';

  angular.module('lmsApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,$timeout,$mdMedia,$state) {

    $scope.pageTitle = 'Page Name';
    $scope.isOpen = false;
    $scope.$mdMedia = $mdMedia;
    $scope.timeoutinc = 150;
  }
})();
