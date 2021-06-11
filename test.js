const Validator = require('./src/Validator')

const request = {
  addresses: [{}]
}

const rules = {
  addresses: 'required|array:object',

  '$addresses:object': {
    city: 'required',
    postcode: 'required'
  }
}

const validation = new Validator(request, rules, {
  locale: 'en',
  errorMessages: {
    addresses: {
      required: 'Алоу, чё тамм?',
      array: {
        common: 'Где массив?!',
        expectedType: (type) => `Я вообще то ждал: ${type}!`
      },
      object: {
        city: {
          required: 'Тимоха обязательно нада свои права качать?!'
        }
      }
    }
  }
})

validation.fails()

if (validation.failed) {
  console.log(JSON.stringify(validation.errors, null, 2))
}
