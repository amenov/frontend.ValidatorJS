"use strict";

var Validator = require(__dirname + '/../../Validator');

module.exports = function (_ref) {
  var rules = _ref.rules,
      requestKey = _ref.requestKey,
      requestValue = _ref.requestValue;

  if ((requestValue === null || requestValue === void 0 ? void 0 : requestValue.__proto__) !== Object.prototype) {
    return 'This field must be a "object"';
  }

  var validationRules = rules['$' + requestKey];

  if (validationRules) {
    var validation = new Validator(requestValue, validationRules);
    validation.fails();

    if (validation.failed) {
      return validation.errors;
    }
  }
};