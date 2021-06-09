"use strict";

var lpn = require('libphonenumber-js');

module.exports = function (_ref) {
  var requestValue = _ref.requestValue,
      countryCode = _ref.ruleArg;

  if (typeof requestValue !== 'string') {
    return 'This field must be a "string"';
  }

  var tel = lpn(requestValue);

  if (tel === undefined || !tel.isValid()) {
    return 'Invalid phone number';
  }

  if (countryCode && tel.country !== countryCode) {
    return 'Invalid country code';
  }
};