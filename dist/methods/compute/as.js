"use strict";

module.exports = function (_ref) {
  var request = _ref.request,
      requestKey = _ref.requestKey,
      requestValue = _ref.requestValue,
      ruleArg = _ref.ruleArg,
      errorMessage = _ref.errorMessage;

  if (requestValue !== request[ruleArg]) {
    var _errorMessage$custom;

    errorMessage = (_errorMessage$custom = errorMessage.custom) !== null && _errorMessage$custom !== void 0 ? _errorMessage$custom : errorMessage["default"];
    return errorMessage(requestKey, ruleArg);
  }
};