"use strict";

var moment = require('moment');

module.exports = function (_ref) {
  var requestValue = _ref.requestValue,
      format = _ref.ruleArg;

  if (!moment(requestValue, format !== null && format !== void 0 ? format : true).isValid()) {
    var _errorMessage$custom;

    return (_errorMessage$custom = errorMessage.custom) !== null && _errorMessage$custom !== void 0 ? _errorMessage$custom : errorMessage["default"];
  }
};