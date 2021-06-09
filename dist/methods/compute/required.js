"use strict";

module.exports = function (_ref) {
  var value = _ref.requestValue;

  if (typeof value === 'string') {
    value = value.trim();
  }

  if (value === undefined || value === null || value.length === 0 || value.__proto__ === Object.prototype && !Object.keys(value).length) {
    return 'Required field';
  }
};