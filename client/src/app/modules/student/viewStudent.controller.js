(function() {
  'use strict';

  angular.module('nextHealthCare')
    .controller('ViewStudentController', ViewStudentController);

  /** @ngInject */
  function ViewStudentController($scope, $state, $stateParams, dataService, baseurls) {
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
    $scope.init();
  }
})();
