(function() {
  'use strict';

  angular.module('nextHealthCare')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $timeout, $mdMedia, $state, $http, dataService) {
    $scope.pageTitle = 'Page Name';
    $scope.isOpen = false;
    $scope.$mdMedia = $mdMedia;
    $scope.timeoutinc = 150;
    $scope.isNewUser = false;
    $scope.hasOtp = false;

    $scope.userLogin = function(credentials){
      if(credentials.user && credentials.password){
        var url = "http://localhost:3000/api/checkcredentials";
        var data = credentials;
        dataService.getData(url, data).then(function(response){
          if(response){
            console.log('valid user');
            $state.go('dashboard');
          }else{
            console.log('invalid user');
          }
        });
      }
    }
    // confirm otp
    $scope.confirmOtp = function(credentials){
      console.log('credentials', credentials);
      if(credentials.user && credentials.otp && credentials.password){
        var url = "http://localhost:3000/api/checkotp";
        var data = credentials;
        dataService.getData(url, data).then(function(response){
          if(response){
            console.log('valid user', response);
            $state.go('dashboard');
          }else{
            console.log('invalid user', response);
          }
        });
      }
    }
    // send otp for new user
    $scope.sendOtp = function(credentials){
      if(credentials.user){
        var url = "http://localhost:3000/api/sendtextmsg";
        var data = credentials;
        $http({method : "POST", url : url, data: data}).then(function(response) {
          console.log('response', response)
            $scope.hasOtp = true;
            $scope.isNewUser = false;
          }, function(response) {
              console.log(response);
        });
      }
    }

  }
})();
