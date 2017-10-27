(function() {
  'use strict';

  angular.module('nextHealthCare')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $timeout, $mdMedia, $state, $http, dataService, baseurls) {
    //this = $scope;
    $scope.isNewUser = false;
    $scope.hasOtp = false;

    $scope.userLogin = function(credentials){
      if(credentials.user && credentials.password){
        var url = baseurls.url + "checkcredentials";
        var data = credentials;
        dataService.getData(url, data).then(function(response){
          if(response){
            console.log('res', response)
            $state.go('dashboard.home');
          }else{
            console.log(response);
          }
        });
      }
    }
    // confirm otp
    $scope.confirmOtp = function(credentials){
      if(credentials.user && credentials.otp && credentials.password){
        var url = baseurls.url + "checkotp";
        var data = credentials;
        dataService.getData(url, data).then(function(response){
          if(response){
            $state.go('dashboard.home');
          }else{
            console.log(response);
          }
        });
      }
    }
    // send otp for new user
    $scope.sendOtp = function(credentials){
      if(credentials.user){
        var url = baseurls.url + "sendtextmsg";
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
