"use strict";

var lpn = require('libphonenumber-js');

module.exports = function (_ref) {
  var requestValue = _ref.requestValue,
      countryCode = _ref.ruleArg,
      errorMessage = _ref.errorMessage;

  if (errorMessage.custom) {
    errorMessage = Object.assign(errorMessage["default"], errorMessage.custom);
  }

  if (typeof requestValue !== 'string') {
    return errorMessage.typeError;
  }

  var tel = lpn(requestValue);

  if (tel === undefined || !tel.isValid()) {
    return errorMessage.main;
  }

  if (countryCode && tel.country !== countryCode) {
    return errorMessage.countryCode;
  }
};