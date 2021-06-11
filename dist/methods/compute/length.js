"use strict";

module.exports = function (_ref) {
  var requestValue = _ref.requestValue,
      length = _ref.ruleArg,
      errorMessage = _ref.errorMessage;

  if (requestValue.length !== +length) {
    var _errorMessage$custom;

    errorMessage = (_errorMessage$custom = errorMessage.custom) !== null && _errorMessage$custom !== void 0 ? _errorMessage$custom : errorMessage["default"];
    return errorMessage(length);
  }
};