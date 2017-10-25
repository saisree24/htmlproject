(function() {
  'use strict';

  angular.module('lmsApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,$timeout,$mdMedia,$state, $http, dataService) {
    $scope.pageTitle = 'Page Name';
    $scope.isOpen = false;
    $scope.$mdMedia = $mdMedia;
    $scope.timeoutinc = 150;
    $scope.isNewUser = false;
    $scope.hasOtp = false;


    $scope.login = function(){
      if($scope.user && $scope.password){
        var url = "http://localhost:3000/api/checkcredentials";
        var data = {'user': $scope.user, 'password': $scope.password};
        dataService.getData(url, data).then(function(response){
          if(response){
            console.log('valid user');
          }else{
            console.log('invalid user');
          }
        });
      }
    }

    $scope.newUser = function(){

      // dataService.getTextMsg(phone).then(function(response){
      //
      // })
    }

    $scope.sendOtp = function(){
      var url = "http://localhost:3000/api/sendTextMsg";
      var data = { "user": $scope.user };
      $http({method : "GET", url : url, data: data}).then(function(response) {
          console.log(response)
        }, function(response) {
            console.log(response);
      });
    }


  }
})();
