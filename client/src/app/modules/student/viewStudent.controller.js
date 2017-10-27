(function() {
  'use strict';

  angular.module('nextHealthCare')
    .controller('ViewStudentController', ViewStudentController);

  /** @ngInject */
  function ViewStudentController($scope, $state, $stateParams, dataService, baseurls) {
    var bmi;
    var waistreport;
    $(['ng-nicescroll']).getNiceScroll().resize();
    $scope.init = function(){
      var url = baseurls.url + "getstudent";
      var data = {user : $stateParams.student};
      dataService.getStudentData(url, data).then(function(response){
        if(response){
          $scope.student = response;
        }
      });
    }
    $scope.waistlist =
    [ 
      { 
        "type" : 'Abnormally Slim',
        "male" : "Below 35",
        "female" : "Below 35"
      },
      { 
        "type" : 'Extremely slim',
        "male" : "35 to 43",
        "female" : "35 to 42"
      },
      { 
        "type" : 'Slender and Healthy',
        "male" : "43 to 46",
        "female" : "42 to 46"
      },
      { 
        "type" : 'Healthy, Normal, Attractive Weight',
        "male" : "46 and 53",
        "female" : "46 and 49"
      },
      { 
        "type" : 'High weight',
        "male" : "53 to 58",
        "female" : "49 to 54"
      },
      { 
        "type" : 'Extremely Overweight/Obese',
        "male" : "58 to 63",
        "female" : "54 to 58"
      },
      { 
        "type" : 'Highly Obese',
        "male" : "Above 63",
        "female" : "Above 58"
      }
    ];
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
      else if(val > 25 && val < 29.99){
        bmiclass = "overweight";
      }
      else if(val > 18.5 && val < 24.99){
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
