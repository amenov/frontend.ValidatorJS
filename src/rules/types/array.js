const Validator = require(__dirname + '/../../Validator')

module.exports = ({
  rules,
  requestKey,
  requestValue,
  ruleArg: type,
  options,
  errorMessage,
  errorMessagesWrapper
}) => {
  errorMessage = errorMessagesWrapper(errorMessage).emw1()

  if (!Array.isArray(requestValue)) {
    return errorMessage.main
  }

  const availableTypes = ['string', 'boolean', 'number', 'object']

  if (type) {
    if (!availableTypes.includes(type)) {
      return errorMessage.typeNotSupported
    }

    let index = 0

    for (const item of requestValue) {
      if (
        (type === 'object' && item.__proto__ !== Object.prototype) ||
        (typeof item !== type && type !== 'object')
      ) {
        return {
          message: errorMessage.expectedType(type),
          index
        }
      }

      const validationRules = rules['$' + requestKey + ':' + type]

      if (validationRules) {
        function wrapper(value) {
          return type === 'object' ? value : { message: value }
        }

        if (
          options.errorMessages[requestKey] &&
          options.errorMessages[requestKey][type]
        ) {
          Object.assign(
            options.errorMessages,
            wrapper(options.errorMessages[requestKey][type])
          )

          delete options.errorMessages[requestKey]
        }

        const validation = new Validator(
          wrapper(item),
          wrapper(validationRules),
          options
        )

        validation.fails()

        if (validation.failed) {
          validation.errors.index = index

          return validation.errors
        }
      }

      index++
    }
  }
}
