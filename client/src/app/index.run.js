(function() {
  'use strict';

  angular
    .module('lmsApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
