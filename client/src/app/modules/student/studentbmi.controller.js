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
          name: 'Sai Sreekanth',
          age: '27 Years',
          date: '27-Oct-17',
          bgroup: ' B+'
        },
        {
          name: 'B Madhusudan',
          age: '28 Years',
          date: '27-Oct-17',
          bgroup: ' O+'
        },
        {
          name: 'Anandaraj',
          age: '27 Years',
          date: '27-Oct-17',
          bgroup: ' A+'
        },
        {
          name: 'P Venkat',
          age: '18 Years',
          date: '27-Oct-17',
          bgroup: ' B+'
        },
        {
          name: 'Kiran (Arjun Reddy)',
          age: '17 Years',
          date: '27-Oct-17',
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
  