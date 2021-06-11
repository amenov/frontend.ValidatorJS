module.exports = ({ requestValue, ruleArg: length, errorMessage }) => {
  if (requestValue.length !== +length) {
    errorMessage = errorMessage.custom ?? errorMessage.default

    return errorMessage(length)
  }
}
