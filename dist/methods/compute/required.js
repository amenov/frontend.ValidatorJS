"use strict";

module.exports = function (_ref) {
  var value = _ref.requestValue,
      errorMessage = _ref.errorMessage;

  if (typeof value === 'string') {
    value = value.trim();
  }

  if (value === undefined || value === null || value.length === 0 || value.__proto__ === Object.prototype && !Object.keys(value).length) {
    var _errorMessage$custom;

    return (_errorMessage$custom = errorMessage.custom) !== null && _errorMessage$custom !== void 0 ? _errorMessage$custom : errorMessage["default"];
  }
};