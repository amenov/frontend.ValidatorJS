module.exports = ({ requestValue, errorMessage }) => {
  if (typeof requestValue !== 'boolean') {
    return errorMessage.custom ?? errorMessage.default
  }
}
