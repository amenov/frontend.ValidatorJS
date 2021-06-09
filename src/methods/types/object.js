const Validator = require(__dirname + '/../../Validator')

module.exports = ({ rules, requestKey, requestValue }) => {
  if (requestValue?.__proto__ !== Object.prototype) {
    return 'This field must be a "object"'
  }

  const validationRules = rules['$' + requestKey]

  if (validationRules) {
    const validation = new Validator(requestValue, validationRules)

    validation.fails()

    if (validation.failed) {
      return validation.errors
    }
  }
}
