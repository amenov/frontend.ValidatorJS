"use strict";

module.exports = function (_ref) {
  var request = _ref.request,
      requestKey = _ref.requestKey,
      requestValue = _ref.requestValue,
      ruleArg = _ref.ruleArg;

  if (requestValue !== request[ruleArg]) {
    return "The value of the field \"".concat(requestKey, "\" does not match the value of the field \"").concat(ruleArg, "\"");
  }
};