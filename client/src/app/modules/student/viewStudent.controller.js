(function() {
  'use strict';

  angular.module('nextHealthCare')
    .controller('ViewStudentController', ViewStudentController);

  /** @ngInject */
  function ViewStudentController($scope, $state, $stateParams, dataService, baseurls) {
    var bmi;
    var waistreport;
    $scope.init = function(){
      console.log('$stateParams', $stateParams.student);
      var url = baseurls.url + "getstudent";
      var data = {user : $stateParams.student};
      dataService.getStudentData(url, data).then(function(response){
        if(response){
          $scope.student = response;
        }else{
          console.log('wrong data..!!!');
        }
      });
    }
    $scope.waistlist = ['Abnormally Slim','Extremely slim','Slender and Healthy','Healthy, Normal, Attractive Weight','High weight','Extremely Overweight/Obese','Highly Obese'];
    $scope.bmilist = ['obese','overweight','healthy','underweight'];
    $scope.init();
    $scope.bmireport = function(height,weight){        
      var heightinmts = height*0.3048;
      bmi = Math.round(((weight/heightinmts)/heightinmts) * 100) / 100;
      return bmi;
    }

    $scope.waistreport = function(waist,height){
      waistreport = Math.round((((waist*2.54)/(height*30.48)) * 100) * 100) / 100;
      return waistreport;
    }
    $scope.reducereport = function(val){
      return val/8;
    }

    $scope.bmiclass = function(val){
      var bmiclass = "";
      if(val > 30){
        bmiclass = "obese";
      }
      else if(val > 25 && val < 29.9){
        bmiclass = "overweight";
      }
      else if(val > 18.5 && val < 24.9){
        bmiclass = "healthy";
      }
      else if(val < 18.5){
        bmiclass = "underweight";
      }
      return bmiclass;
    }

    $scope.waistclass = function(val){
      var waistclass = "";
      if(val < 35){
        waistclass = "abnormally-slim";
      }
      else if(val > 35 && val < 43){
        waistclass = "extremely-slim";
      }
      else if(val > 43 && val < 46){
        waistclass = "slender-and-healthy";
      }
      else if(val > 46 && val < 53){
        waistclass = "healthy-normal-attractive-weight";
      }
      else if(val > 53 && val < 58){
        waistclass = "high-weight";        
      }
      else if(val > 58 && val < 63){
        waistclass = "extremely-overweight-obese";        
      }
      else if(val < 63){
        waistclass = "highly-obese";        
      }
      return waistclass;
     
    }

  }
})();
