(function() {
  'use strict';

  angular
    .module('nextHealthCare')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
