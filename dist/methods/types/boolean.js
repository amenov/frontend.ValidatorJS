"use strict";

module.exports = function (_ref) {
  var requestValue = _ref.requestValue;

  if (typeof requestValue !== 'boolean') {
    return 'This field must be a "boolean"';
  }
};