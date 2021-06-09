"use strict";

module.exports = function (_ref) {
  var requestValue = _ref.requestValue;

  if (typeof requestValue !== 'string') {
    return 'This field must be a "string"';
  }
};