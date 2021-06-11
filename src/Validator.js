class Validator {
  constructor(request, rules, options) {
    this.request = request
    this.rules = rules
    this.options = {
      ...require(__dirname + '/default-options'),
      ...options
    }

    this.methods = require(__dirname + '/methods.js')
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

  #ruleHandler(name, options) {
    const handler = require(__dirname + '/methods/' + this.methods[name])

    return handler(options)
  }

  fails() {
    const locale = require(__dirname + `/locales/${this.options.locale}`)
    const errorMessages = this.options.errorMessages

    for (const { key, rules } of this.#formattedRules) {
      for (const rule of rules) {
        try {
          const message = this.#ruleHandler(rule.name, {
            request: this.request,
            rules: this.rules,
            options: this.options,
            requestKey: key,
            requestValue: this.request[key],
            ruleArg: rule.arg,
            errorMessage: {
              default: locale[rule.name],
              get custom() {
                if (errorMessages[key] && errorMessages[key][rule.name]) {
                  return errorMessages[key][rule.name]
                }
              }
            }
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
