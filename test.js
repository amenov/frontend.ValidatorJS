const Validator = require('./src/Validator')

const request = {
  name: '',
  age: 17
}

const rules = {
  name: 'required',
  age: 'required|min:18'
}

const validation = new Validator(request, rules, {
  locale: 'ru',
  errorMessages: {
    name: {
      required: 'Это обязательно!!!'
    },
    age: {
      required: 'Это обязasdasdательно!!!',
      min: (num) => `Минasdasdимально: ${num}`
    }
  }
})

validation.fails()

if (validation.failed) {
  console.log(validation.errors)
}
