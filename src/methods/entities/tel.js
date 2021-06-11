const lpn = require('libphonenumber-js')

module.exports = ({ requestValue, ruleArg: countryCode, errorMessage }) => {
  if (errorMessage.custom) {
    errorMessage = Object.assign(errorMessage.default, errorMessage.custom)
  }

  if (typeof requestValue !== 'string') {
    return errorMessage.typeError
  }

  const tel = lpn(requestValue)

  if (tel === undefined || !tel.isValid()) {
    return errorMessage.main
  }

  if (countryCode && tel.country !== countryCode) {
    return errorMessage.countryCode
  }
}
