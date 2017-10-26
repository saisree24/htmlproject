(function() {
  'use strict';

  angular
    .module('nextHealthCare')
    .service("SharedProperties", function () {
        var _userName = null;

        return {
            getUser: function () {
                return _userName
            },

            setUser: function(user) {
                _userName = user;
            }
        }
    });
})();
