(function() {
  'use strict';

  angular
    .module('nextHealthCare')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('baseurls', {
      url: 'http://localhost:3000/api/'
    });

})();
