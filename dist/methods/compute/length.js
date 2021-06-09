"use strict";

module.exports = function (_ref) {
  var requestValue = _ref.requestValue,
      length = _ref.ruleArg;

  if (requestValue.length !== +length) {
    return "The length should be: ".concat(length);
  }
};