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

  if (!Array.isArray(requestValue)) return errorMessage.main

  if (!type) return

  const availableTypes = ['string', 'boolean', 'number', 'object']

  if (!availableTypes.includes(type)) return errorMessage.typeNotSupported

  const errors = requestValue
    .map((item, index) => {
      if (
        (type === 'object' && item.__proto__ !== Object.prototype) ||
        (typeof item !== type && type !== 'object')
      )
        return {
          message: errorMessage.expectedType(type),
          index
        }

      const validationRules = rules['$' + requestKey + ':' + type]

      if (!validationRules) return

      const wrapper = (val) => (type === 'object' ? val : { message: val })

      if (options.errorMessages?.[requestKey]?.[type]) {
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

      if (validation.failed) return { ...validation.errors, index }
    })
    .filter((error) => error)

  if (errors.length) return errors
}
