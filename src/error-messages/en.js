const locale = {
  // COMPUTE
  as: (requestKey, targetKey) =>
    `The value of the field "${requestKey}" does not match the value of the field "${targetKey}"`,
  between: {
    typeError: 'Type can only be string, number, array',
    max: (num) => `Maximum: ${num}`,
    min: (num) => `Minimum: ${num}`
  },
  length: (num) => `The length should be: ${num}`,
  max: {
    typeError: 'Type can only be string, number, array',
    main: (num) => `Maximum: ${num}`
  },
  min: {
    typeError: 'Type can only be string, number, array',
    main: (num) => `Minimum: ${num}`
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
  array: 'This field must be a "array"',
  boolean: 'This field must be a "boolean"',
  number: 'This field must be a "number"',
  object: 'This field must be a "object"',
  string: 'This field must be a "string"'
}

module.exports = locale
