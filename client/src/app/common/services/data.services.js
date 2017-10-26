(function() {
  'use strict';
  angular.module('nextHealthCare')
    .service('dataService', ['$http',
      function($http) {
        // get user credentials
        this.getData = function(url, data){
          return $http({method : "POST",url : url,data: data}).then(function(response) {
            console.log('response', response);
            if(response.data.status){return true;}
            }, function(response) {
                return false;
          });
        }
        this.getOtpCredentials = function(url, data){
          return $http({method : "POST",url : url,data: data}).then(function(response) {
              console.log('response', response);
              //if(response.data && response.data.user == data.user){return true;}
            }, function(response) {
                console.log(response);
                return false;
          });
        }




      }]
    )
  })();
