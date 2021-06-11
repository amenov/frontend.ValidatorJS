"use strict";

module.exports = function (_ref) {
  var value = _ref.requestValue,
      errorMessage = _ref.errorMessage;

  if (typeof value !== 'string' || value.trim() === '' || !value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
    var _errorMessage$custom;

    return (_errorMessage$custom = errorMessage.custom) !== null && _errorMessage$custom !== void 0 ? _errorMessage$custom : errorMessage["default"];
  }
};