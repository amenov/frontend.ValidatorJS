module.exports = (errorMessage) => ({
  emw1(main = true) {
    if (errorMessage.custom) {
      if (main) {
        if (typeof errorMessage.custom === 'function') {
          errorMessage.custom = {
            main: errorMessage.custom
          }
        } else if (typeof errorMessage.custom === 'string') {
          const message = errorMessage.custom

          errorMessage.custom = {
            main: () => message
          }
        }
      }

      errorMessage = Object.assign(errorMessage.default, errorMessage.custom)
    } else {
      errorMessage = errorMessage.default
    }

    return errorMessage
  },
  emw2: () => errorMessage.custom ?? errorMessage.default
})
