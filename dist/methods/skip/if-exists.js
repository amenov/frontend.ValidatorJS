"use strict";

module.exports = function (_ref) {
  var request = _ref.request,
      requestKey = _ref.ruleArg,
      requestValue = _ref.requestValue;

  if (requestKey && request[requestKey] === undefined || !requestKey && requestValue === undefined) {
    return 'skip';
  }
};