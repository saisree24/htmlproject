(function() {
  'use strict';
  angular.module('nextHealthCare')
    .service('dataService', ['$http',
      function($http) {
        // get user credentials
        this.getData = function(url, data){
          return $http({method : "POST", url:url, data:data}).then(function(response) {
            console.log('response', response);
            if(response.data.status){
              return true;
            }else{
              return false;
            }
            }, function(response) {
                return false;
          });
        }

        // get user credentials
        this.getDetails = function(url, data){
          return $http({method : "GET",url : url,data: data}).then(function(response) {
            if(response.data){
              return response.data;
            }else{
              return false;
            }
          }, function(err) {
                return false;
          });
        }

        // get user credentials
        this.getStudentData = function(url, data){
          return $http({method : "POST",url : url,data: data}).then(function(response) {
            if(response.data){
              return response.data;
            }else{
              return false;
            }
          }, function(err) {
                return false;
          });
        }



      }]
    )
  })();
