(function() {
  'use strict';

  angular
    .module('nextHealthCare')
    .directive('sideNavbar', sideNavbar);

  /** @ngInject */
  function sideNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/common/sidenav/sidenav.html',
      scope: {
          creationDate: '='
      },
      controller: SideNavController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SideNavController($scope,$timeout) {
      var vm = this;
      $timeout(function() {
        $('.lms_left_item').each(function(i){
            var row = $(this);
            $timeout(function() {
                  row.toggleClass('inme', !row.hasClass('inme'));
              }, 150*i);
        });
      }, 5);

      $scope.menulist = ['activities','assessment','experiment','lab','mind-maps','notes','online-tutoring','tlm','slm'];
    }
  }

})();
