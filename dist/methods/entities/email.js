"use strict";

module.exports = function (_ref) {
  var value = _ref.requestValue;

  if (typeof value !== 'string' || value.trim() === '' || !value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
    return 'Invalid email';
  }
};