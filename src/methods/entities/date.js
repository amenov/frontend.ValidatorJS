const moment = require('moment')

module.exports = ({ requestValue, ruleArg: format }) => {
  if (!moment(requestValue, format ?? true).isValid()) {
    return errorMessage.custom ?? errorMessage.default
  }
}
