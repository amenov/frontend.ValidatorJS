module.exports = ({ requestValue, errorMessage }) => {
  if (typeof requestValue !== 'number') {
    return errorMessage.custom ?? errorMessage.default
  }
}
