(function() {
  'use strict';

  angular.module('nextHealthCare')
    .controller('EditStudentController', EditStudentController);

  /** @ngInject */
  function EditStudentController($scope, $state, $stateParams, dataService, baseurls) {
    $scope.init = function(){
      var url = baseurls.url + "getstudent";
      var data = {user : $stateParams.student};
      dataService.getStudentData(url, data).then(function(response){
        if(response){
          $scope.student = response;
          $scope.sdob = new Date();
          $scope.selected = $scope.student.shSuggest;
          if($scope.student.sState == 'true'){
            $scope.student.sState = true;
          }else{
            $scope.student.sState = false;
          }
        }
      });
      $(['ng-nicescroll']).getNiceScroll().resize();
    }
    $scope.init();

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
    $scope.cancel = function(){
      $state.go('dashboard.studentlist');
    };
    $scope.addStudent = function(student){
      var studentObj = {};
      studentObj.sState = student.sState;
      studentObj.sage = student.sage;
      studentObj.sfname = student.sfname;
      studentObj.slname = student.slname;
      studentObj.sgender = student.sgender;
      studentObj.sbGroup = student.sbGroup;
      studentObj.shSuggest = $scope.selected;
      studentObj.sheight = student.sheight;
      studentObj.sweight = student.sweight;
      studentObj.swaist = student.swaist;
      studentObj.user = student.user;
      studentObj.semail = student.semail;
      studentObj.shIssue = 0;

      var date = new Date($scope.sdob);
      var d = date.getDate();
      var m = date.getMonth() + 1;
      var y = date.getFullYear();
      studentObj.sdob =  d + '-' + m  + '-'+ y;
      var url = baseurls.url + "updatestudent";
      var data = studentObj;
      dataService.getData(url, data).then(function(response){
        if(response){
          console.log('added successfully');
          $state.go('dashboard.studentview', {student: student.user});
        }else{
          console.log('wrong data..!!!');
        }
      });
    }

  }
})();
