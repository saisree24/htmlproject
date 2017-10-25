(function() {
  'use strict';

  angular
    .module('lmsApp')
    .controller('studyplanController', studyplanController);

  /** @ngInject */
  function studyplanController($scope,$timeout,SharedProperties) {

    //$scope.pageTitle = 'Study Plan';
    $scope.pageview = 'app/view/studyplanlist.html';
    $scope.loading = false;
    $scope.innerTabselected = 0;
    $scope.worktype = [{ id:0, name: "Study Plan" }, { id:1, name: "Resources" }];
    $scope.studyplanlist = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];
    $scope.resourceobj = ['web reference','document','presentation','worksheets','assignments'];
    $scope.otherstuff = function(){
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
    $scope.pageTitle = SharedProperties.getUser();
    $scope.changedata = function(val){
    //  $scope.pageTitle = val.name;
      SharedProperties.setUser(val.name);
      $scope.loading = true;
      $timeout(function() {
        $('.resource_card').removeClass('inme');
        $('.repeat_animation').removeClass('inme');
        if(val.id == 0){
          $scope.pageview = 'app/view/studyplanlist.html';
          $timeout(function() {
              $scope.loading = false;
              $(['ng-nicescroll']).getNiceScroll().resize();
           }, 5);
        }
        if(val.id == 1){
          $scope.pageview = 'app/common/resourcelist/resourcecard.html';
          $timeout(function() {
              $scope.loading = false;
           }, 5);
        }
        $scope.otherstuff();
      }, 1000);

    }
    $scope.otherstuff();
  }
})();
