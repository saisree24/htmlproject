(function() {
  'use strict';

  angular.module('nextHealthCare')
    .controller('StudentController', StudentController);

  /** @ngInject */
  function StudentController($scope,$timeout,$mdMedia,$state) {

    $scope.selected = [];
    $scope.status = false;

    $scope.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      }
      else {
        list.push(item);
      }
    };

    $scope.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };    
  }
})();
