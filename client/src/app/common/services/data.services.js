(function() {
  'use strict';
  angular.module('lmsApp')
    .service('dataService', ['$http',
      function($http) {
        // get user credentials
        this.getData = function(url, data){
          return $http({method : "POST",url : url,data: data}).then(function(response) {
              if(response.data && response.data.user == data.user){return true;}
            }, function(response) {
                console.log(response);
                return false;
          });
        }



      }]
    )
  })();
