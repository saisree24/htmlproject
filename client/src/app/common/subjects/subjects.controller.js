(function() {
  'use strict';

  angular
    .module('lmsApp')
    .controller('subjectsController', subjectsController);

  /** @ngInject */
  function subjectsController($scope,$timeout,$stateParams) {
    $scope.pageTitle = "Subject List";
    $scope.subjectdata = ['Accountancy','Biology','Computer Science','Economics','English Grammar','English Lab','English Literature Reader','Geography','Hindi','Maths','Phonetics','Physics','Science','Zoology','Sociology','Biotechnology','Botany','Business Studies','Chemistry','Civics','English Writing Skills','Environmental Science'];
    $scope.otherstuff = function(){
      $timeout(function() {
          $(['ng-nicescroll']).getNiceScroll().resize();
          $('.resource_card,.repeat_animation').each(function(i){
              var row = $(this);
              $timeout(function() {
                    row.toggleClass('inme', !row.hasClass('inme'));
                }, 250*i);
          });
       }, 5);
    }
    $scope.otherstuff();
  }
})();
