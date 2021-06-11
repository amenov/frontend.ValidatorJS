"use strict";

module.exports = function (_ref) {
  var requestValue = _ref.requestValue;

  if ((requestValue === null || requestValue === void 0 ? void 0 : requestValue.length) === 0 || (requestValue === null || requestValue === void 0 ? void 0 : requestValue.__proto__) === Object.prototype && Object.keys(requestValue).length === 0) {
    return 'skip';
  }
};