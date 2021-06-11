"use strict";

module.exports = function (_ref) {
  var requestValue = _ref.requestValue,
      errorMessage = _ref.errorMessage;

  if (typeof requestValue !== 'boolean') {
    var _errorMessage$custom;

    return (_errorMessage$custom = errorMessage.custom) !== null && _errorMessage$custom !== void 0 ? _errorMessage$custom : errorMessage["default"];
  }
};