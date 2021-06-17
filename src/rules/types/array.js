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
  if (!Array.isArray(requestValue)) {
    return errorMessagesWrapper(errorMessage).emw2()
  }

  const validationRules = rules['$' + requestKey]

  if (!validationRules) return

  const errors = []

  for (const [index, item] of requestValue.entries()) {
    if (item === undefined) continue

    if (options.errorMessages?.['$' + requestKey]) {
      Object.assign(
        options.errorMessages,
        options.errorMessages['$' + requestKey]
      )

      delete options.errorMessages['$' + requestKey]
    }

    const validation = new Validator(item, validationRules, options)

    validation.fails()

    if (validation.failed) {
      errors[index] = { ...validation.errors, index }
    }
  }

  if (errors.length) return errors
}
