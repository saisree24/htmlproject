(function() {
  'use strict';

  angular.module('nextHealthCare')
    .controller('StudentController', StudentController);

  /** @ngInject */
  function StudentController($scope,$timeout,$mdMedia,$state, dataService, baseurls) {
    $(['ng-nicescroll']).getNiceScroll().resize();
    $scope.selected = [];
    $scope.status = false;

    $scope.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      }else {
        list.push(item);
      }
    };

    $scope.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };

    function bmireport(height,weight){
      var heightinmts = Math.round((height*0.3048) * 100) / 100;
      var bmi = Math.round(((weight/heightinmts)/heightinmts) * 100) / 100;
      return bmi;
    }

    function waistreport(waist,height){
      var waistreport = Math.round((((waist*2.54)/(height*30.48)) * 100) * 100) / 100;
      return waistreport;
    }

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
      studentObj.bmireport = bmireport(student.sheight,student.sweight);
      studentObj.waistreport = waistreport(student.swaist,student.sheight);
      var date = new Date($scope.sdob);
      var d = date.getDate();
      var m = date.getMonth() + 1;
      var y = date.getFullYear();
      studentObj.sdob =  d + '-' + m  + '-'+ y;
      var url = baseurls.url + "addstudent";
      var data = studentObj;
      dataService.getData(url, data).then(function(response){
        if(response){
          $state.go('dashboard.studentview', {student: student.user});
        }
      });
    }
    $scope.studentList = function(){
      $state.go('dashboard.studentlist');
    }
  }
})();
