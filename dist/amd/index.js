define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function configure(aurelia) {
    aurelia.globalizeResources('./grid/grid');
    aurelia.globalizeResources('./pager/pager');
  }
});