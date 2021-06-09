"use strict";

var moment = require('moment');

module.exports = function (_ref) {
  var requestValue = _ref.requestValue,
      format = _ref.ruleArg;

  if (!moment(requestValue, format !== null && format !== void 0 ? format : true).isValid()) {
    return 'Invalid date';
  }
};