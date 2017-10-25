(function() {
  'use strict';

  angular
    .module('lmsApp')
    .controller('analyticsController', analyticsController);

  /** @ngInject */
  function analyticsController($scope,$timeout) {

    $scope.pageTitle = 'Analytics';
    $timeout(function() {
        $('.resource_card').each(function(i){
            var row = $(this);
            $timeout(function() {
                  row.toggleClass('inme', !row.hasClass('inme'));
              }, $scope.timeoutinc*i);
        });
     }, 5);

  }
})();
