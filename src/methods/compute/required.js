module.exports = ({ requestValue: value, errorMessage }) => {
  if (typeof value === 'string') {
    value = value.trim()
  }

  if (
    value === undefined ||
    value === null ||
    value.length === 0 ||
    (value.__proto__ === Object.prototype && !Object.keys(value).length)
  ) {
    return errorMessage.custom ?? errorMessage.default
  }
}
