(function() {
  'use strict';

  angular.module('nextHealthCare')
    .controller('StudentListController', StudentListController);

  /** @ngInject */
  function StudentListController($scope, $state, dataService, baseurls) {
    $scope.init = function(){
      var url = baseurls.url + "getStudentDetails";
      var data = '';
      dataService.getDetails(url, data).then(function(response){
        if(response){
          $scope.slists = response;
        }else{
          console.log('wrong data..!!!');
        }
      });
    }
    $scope.init();

    $scope.deleteStudent = function(student){
      var url = baseurls.url + "deletestudent";
      var data = {user: student};
      dataService.getData(url, data).then(function(response){
        if(response){
          console.log('deleted successfully');
          $scope.updateStudents(student);
        }else{
          console.log('wrong data..!!!');
        }
      });
    }
    $scope.addStudent = function(){
      $state.go('dashboard.addstudent');
    }
    $scope.updateStudents = function(student){
      angular.forEach($scope.slists, function(data, index){
        if(data.user == student){
          $scope.slists.splice(index, 1);
        }
      });
    }
    $scope.editStudent = function(student){
      $state.go('dashboard.editstudent', {student: student});
    }
    $scope.viewStudent = function(student){
      $state.go('dashboard.studentview', {student: student});
    }

  }
})();
