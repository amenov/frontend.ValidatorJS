const defaultOptions = require(__dirname + '/default-options')

class Validator {
  constructor(request, rules, options) {
    this.request = request
    this.rules = rules

    this.options = {
      ...defaultOptions,
      ...options
    }

    this.errors = {}
  }

  get #formattedRules() {
    const formattedRules = []

    for (const key in this.rules) {
      if (!key.startsWith('$')) {
        const value = this.rules[key]

        if (value.__proto__ === Object.prototype) {
          Object.assign(this.rules, {
            [key]: 'object',
            ['$' + key]: value
          })
        }
      }
    }

    for (const key in this.rules) {
      if (!key.startsWith('$')) {
        const value = this.rules[key]

        if (value && typeof value === 'string') {
          const rules = []

          for (const rule of value.split('|')) {
            const obj = {}

            if (rule.includes(':')) {
              const [name, arg] = rule.split(':')

              obj['name'] = name
              obj['arg'] = arg
            } else {
              obj['name'] = rule
            }

            rules.push(obj)
          }

          formattedRules.push({ key, rules })
        }
      }
    }

    return formattedRules
  }

  get failed() {
    return !!Object.keys(this.errors).length
  }

  #getRuleHandler(name) {
    const methods = require(__dirname + '/methods.js')
    const handler = require(__dirname + '/methods/' + methods[name])

    return handler
  }

  fails() {
    const locale = require(__dirname + `/locales/${this.options.locale}`)

    for (const { key, rules } of this.#formattedRules) {
      for (const rule of rules) {
        try {
          const ruleHandler = this.#getRuleHandler(rule.name)

          let errorMessage = locale[rule.name]

          if (this.options?.errorMessages) {
            errorMessage = this.options.errorMessages[key][rule.name]
          }

          const message = ruleHandler({
            request: this.request,
            requestKey: key,
            requestValue: this.request[key],
            ruleArg: rule.arg,
            rules: this.rules,
            options: this.options,
            errorMessage
          })

          if (message === 'skip') {
            break
          } else if (message) {
            this.errors[key] = message

            break
          }
        } catch (err) {
          console.log(err)
        }
      }
    }

    return this.failed
  }
}

module.exports = Validator
