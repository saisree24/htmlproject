(function() {
  'use strict';

  angular
    .module('nextHealthCare')
    .controller('schoolplanController', schoolplanController);

  /** @ngInject */
  function schoolplanController($scope,$timeout,$stateParams,SharedProperties) {

    $scope.pageTitle = 'School Plan';
    $scope.subTitle = 'Class Work';
    $scope.loading = false;
    $scope.worktype = [{ id:0, name: "Class Work" }, { id:1, name: "Home Work" }, { id:2, name: "External Resource" }];
    $scope.resourcedata = $scope.worktype[$stateParams.id];
    $scope.resourceobj = ['worksheet','activity','assessment','spread sheet','web reference','document','presentation','worksheets','assignments','image'];
    $scope.otherstuff = function(){
      $('.resource_card,.repeat_animation').removeClass('inme');
      $timeout(function() {
          $(['ng-nicescroll']).getNiceScroll().resize();
          $('.resource_card,.repeat_animation').each(function(i){
              var row = $(this);
              $timeout(function() {
                    row.toggleClass('inme', !row.hasClass('inme'));
                }, $scope.timeoutinc*i);
          });
       }, 5);
    }

    SharedProperties.setUser($scope.pageTitle);
    $scope.otherstuff();
     $scope.changedata = function(val){

       $scope.subTitle = val.name;
       $scope.loading = true;
       $timeout(function() {
         $scope.loading = false;
         if(val.id == 0){
           $scope.resourceobj = ['worksheet','activity','assessment','spread sheet','web reference','document','presentation','worksheets','assignments','image'];
         }
         if(val.id == 1){
           $scope.resourceobj = ['web reference','document','presentation','worksheets','assignments'];
         }
         if(val.id == 2){
           $scope.resourceobj = ['document','presentation'];
         }
         $scope.otherstuff();
       }, 2000);

     }


     $scope.prev = function(){
       $scope.loading = true;
       $timeout(function() {
         $scope.loading = false;
           $scope.resourceobj = ['Previous','worksheet','activity','assessment','spread sheet','web reference','document','presentation','worksheets','assignments','image'];
         $scope.otherstuff();
       }, 2000);
     }

     $scope.next = function(){
       $scope.loading = true;
       $timeout(function() {
         $scope.loading = false;
           $scope.resourceobj = ['Next','worksheet','activity','assessment','spread sheet','web reference','document','presentation','worksheets','assignments','image'];
         $scope.otherstuff();
       }, 2000);
     }
  }
})();
