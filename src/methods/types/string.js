module.exports = ({ requestValue, errorMessage }) => {
  if (typeof requestValue !== 'string') {
    return errorMessage.custom ?? errorMessage.default
  }
}
