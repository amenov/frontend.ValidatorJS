const Validator = require(__dirname + '/../../Validator')

module.exports = ({
  rules,
  requestKey,
  requestValue,
  options,
  errorMessage
}) => {
  if (requestValue?.__proto__ !== Object.prototype) {
    return errorMessage.custom ?? errorMessage.default
  }

  const validationRules = rules['$' + requestKey]

  if (validationRules) {
    if (options.errorMessages[requestKey]) {
      Object.assign(options.errorMessages, options.errorMessages[requestKey])

      delete options.errorMessages[requestKey]
    }

    console.log(options.errorMessages)

    const validation = new Validator(requestValue, validationRules, options)

    validation.fails()

    if (validation.failed) {
      return validation.errors
    }
  }
}
