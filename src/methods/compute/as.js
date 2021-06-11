module.exports = ({
  request,
  requestKey,
  requestValue,
  ruleArg,
  errorMessage
}) => {
  if (requestValue !== request[ruleArg]) {
    errorMessage = errorMessage.custom ?? errorMessage.default

    return errorMessage(requestKey, ruleArg)
  }
}
