"use strict";

module.exports = function (_ref) {
  var requestValue = _ref.requestValue;

  if (typeof requestValue !== 'number') {
    return 'This field must be a "number"';
  }
};