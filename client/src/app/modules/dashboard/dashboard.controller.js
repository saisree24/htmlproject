(function() {
  'use strict';

  angular.module('nextHealthCare')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($scope,$timeout,$mdMedia,$state) {

    $scope.pageTitle = 'Page Name';
    $scope.isOpen = false;
    $scope.$mdMedia = $mdMedia;
    $scope.timeoutinc = 150;
    $scope.studyplanlist = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];
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
    $timeout(function() {
      $('.resource_card').removeClass('inme');
      $('.repeat_animation').removeClass('inme');
        $scope.pageview = 'app/view/studyplanlist.html';
        $timeout(function() {
            $(['ng-nicescroll']).getNiceScroll().resize();
         }, 5);
      $scope.otherstuff();
    }, 1000);
  }
})();
