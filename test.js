const Validator = require('./src/Validator')

const request = {}

const rules = {}

const options = {}

const validation = new Validator(request, rules, options)

validation.fails()

if (validation.failed) {
  console.log(JSON.stringify(validation.errors, null, 2))
}
