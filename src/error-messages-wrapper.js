module.exports = (errorMessage) => ({
  emw1: (main = true) => {
    if (errorMessage.custom && main) {
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

    return errorMessage.custom
      ? Object.assign(errorMessage.default, errorMessage.custom)
      : errorMessage.default
  },
  emw2: () => errorMessage.custom ?? errorMessage.default
})
