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
              simage: 'assets/images/student3.jpg',
              sclass: 'II Class',
              sdescription: 'language feel it. Its a simple request, as well...'
          },
          {
            sname: 'Symonds Andrew',
            simage: 'assets/images/student3.jpg',
            sclass: 'II Class',
            sdescription: 'language feel it. Its a simple request, as well...'
          },
          {
            sname: 'Symonds Andrew',
            simage: 'assets/images/student3.jpg',
            sclass: 'II Class',
            sdescription: 'language feel it. Its a simple request, as well...'
          },
          {
            sname: 'Symonds Andrew',
            simage: 'assets/images/student3.jpg',
            sclass: 'II Class',
            sdescription: 'language feel it. Its a simple request, as well...'
          },
          {
            sname: 'Symonds Andrew',
            simage: 'assets/images/student3.jpg',
            sclass: 'II Class',
            sdescription: 'language feel it. Its a simple request, as well...'
          }
      ];

      $scope.slists = [
        {
          age: 15,
          bgroup: ' B+'
        }
      ];

      $scope.lists = [
        {
          icon: 'edit',
          name: 'Edit'
        },
        {
          icon: 'remove_red_eye',
          name: 'View'
        },
        {
          icon: 'delete',
          name: 'Delete'
        }
        
      ];

  
  

    }
  })();
  