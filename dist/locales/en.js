"use strict";

var locale = {
  // COMPUTE
  as: function as(requestKey, targetKey) {
    return "The value of the field \"".concat(requestKey, "\" does not match the value of the field \"").concat(targetKey, "\"");
  },
  between: {
    typeError: 'Type can only be string, number, array',
    max: function max(num) {
      return "Maximum: ".concat(num);
    },
    min: function min(num) {
      return "Minimum: ".concat(num);
    }
  },
  length: function length(num) {
    return "The length should be: ".concat(num);
  },
  max: {
    typeError: 'Type can only be string, number, array',
    main: function main(num) {
      return "Maximum: ".concat(num);
    }
  },
  min: {
    typeError: 'Type can only be string, number, array',
    main: function main(num) {
      return "Minimum: ".concat(num);
    }
  },
  required: 'Required',
  // ENTITIES
  date: 'Invalid date',
  email: 'Invalid email',
  tel: {
    typeError: 'This field must be a "string"',
    main: 'Invalid phone number',
    countryCode: 'Invalid country code'
  },
  // TYPES
  array: {
    main: 'This field must be a "array"',
    typeNotSupported: 'The type you specified was not found in the list of available types.',
    expectedType: function expectedType(type) {
      return "Array element must be of type \"".concat(type, "\"");
    }
  },
  "boolean": 'This field must be a "boolean"',
  number: 'This field must be a "number"',
  object: 'This field must be a "object"',
  string: 'This field must be a "string"'
};
module.exports = locale;