"use strict";

var Validator = require(__dirname + '/../../Validator');

module.exports = function (_ref) {
  var rules = _ref.rules,
      requestKey = _ref.requestKey,
      requestValue = _ref.requestValue,
      options = _ref.options,
      errorMessage = _ref.errorMessage;

  if ((requestValue === null || requestValue === void 0 ? void 0 : requestValue.__proto__) !== Object.prototype) {
    var _errorMessage$custom;

    return (_errorMessage$custom = errorMessage.custom) !== null && _errorMessage$custom !== void 0 ? _errorMessage$custom : errorMessage["default"];
  }

  var validationRules = rules['$' + requestKey];

  if (validationRules) {
    if (options.errorMessages[requestKey]) {
      Object.assign(options.errorMessages, options.errorMessages[requestKey]);
      delete options.errorMessages[requestKey];
    }

    console.log(options.errorMessages);
    var validation = new Validator(requestValue, validationRules, options);
    validation.fails();

    if (validation.failed) {
      return validation.errors;
    }
  }
};