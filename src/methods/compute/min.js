module.exports = ({ requestValue: value, ruleArg: num, errorMessage }) => {
  if (errorMessage.custom) {
    errorMessage = Object.assign(errorMessage.default, errorMessage.custom)
  }

  if (
    typeof value !== 'string' &&
    typeof value !== 'number' &&
    !Array.isArray(value)
  ) {
    return errorMessage.typeError
  }

  if (
    !(
      (typeof value === 'string' && value.length >= num) ||
      (typeof value === 'number' && value >= num) ||
      (Array.isArray(value) && value.length >= num)
    )
  ) {
    return errorMessage.main(num)
  }
}
