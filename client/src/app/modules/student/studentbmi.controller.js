(function() {
    'use strict';
  
    angular.module('nextHealthCare')
      .controller('StudentbmiController', StudentbmiController);
  
    /** @ngInject */
    function StudentbmiController($scope) {
  
      $scope.pageTitle = 'Student List';

      $scope.cardslists = [
          {
              sname: 'Symonds Andrew',
              simage: 'assets/images/student1.jpg',
              sdescription: 'language feel it. Its a simple request, as well...'
          }
      ]

    }
  })();
  