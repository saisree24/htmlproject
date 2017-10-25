(function() {
  'use strict';

  angular
    .module('lmsApp')
    .directive('lmsNavbar', lmsNavbar)

    .directive('backButton', ['$window', function($window) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    $window.history.back();
                });
            }
        };
    }]);

  /** @ngInject */
  function lmsNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/common/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope,moment,$location,$state) {
      var vm = this;
      $scope.selectedIndex = 0;
      $scope.subjectslist = function(){
        $state.transitionTo('lms.subjects');
      }
      $scope.chapterslist = function(){
        $state.transitionTo('lms.chapters');
      }

      // $scope.$watch('selectedIndex', function(current, old) {
      //     switch (current) {
      //         case 0:
      //             $state.transitionTo('lms.schoolplan');
      //             $scope.selectedIndex = 0;
      //             break;
      //         case 1:
      //             $state.transitionTo('lms.studyplan');
      //             $scope.selectedIndex = 1;
      //             break;
      //         case 2:
      //             $state.transitionTo('lms.socialview');
      //             $scope.selectedIndex = 2;
      //             break;
      //         case 3:
      //             $state.transitionTo('lms.analytics');
      //             $scope.selectedIndex = 3;
      //             break;
      //     }
      // });

      $scope.changedata = function(val){
        if(val == 0){
          $state.transitionTo('lms.schoolplan');
          $scope.selectedIndex = 0;
        }
        if(val == 1){
          $state.transitionTo('lms.studyplan');
          $scope.selectedIndex = 1;
        }
        if(val == 2){
          $state.transitionTo('lms.socialview');
          $scope.selectedIndex = 2;
        }
        if(val == 3){
          $state.transitionTo('lms.analytics');
          $scope.selectedIndex = 3;
        }
      }
    }
  }

})();
