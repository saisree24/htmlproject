(function() {
  'use strict';

  angular
    .module('nextHealthCare')
    .controller('chaptersController', chaptersController);

  /** @ngInject */
  function chaptersController($scope,$timeout,$stateParams) {
    $scope.pageTitle = "Chapter list";
    $scope.subjectdata = ['Accountancy','Biology','Computer Science','Economics','English Grammar','English Lab','English Literature Reader','Geography','Hindi','Maths','Phonetics','Physics','Science','Zoology','Sociology','Biotechnology','Botany','Business Studies','Chemistry','Civics','English Writing Skills','Environmental Science'];
    $scope.otherstuff = function(){
      $timeout(function() {
          $(['ng-nicescroll']).getNiceScroll().resize();
          $('.resource_card,.repeat_animation').each(function(i){
              var row = $(this);
              $timeout(function() {
                    row.toggleClass('inme', !row.hasClass('inme'));
                    if($('.repeat_animation').length-1 == i){
              					$(['ng-nicescroll']).resize();
              			}
                }, $scope.timeoutinc*i);
          });
       }, 5);
    }
    $scope.otherstuff();
  }
})();
