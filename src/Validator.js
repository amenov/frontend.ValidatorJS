class Validator {
  #request
  #rules
  #options
  #errorMessages
  #configRules = require(__dirname + '/config-rules')
  #errorMessagesWrapper = require(__dirname + '/error-messages-wrapper')

  errors = {}

  constructor(request, rules, options) {
    this.#request = request || {}
    this.#rules = rules || {}
    this.#options = { locale: 'en', ...(options || {}) }
    this.#errorMessages = require(__dirname +
      `/error-messages/${this.#options.locale}`)
  }

  get #formattedRules() {
    const formattedRules = []

    for (const key in this.#rules) {
      if (!key.startsWith('$')) {
        const value = this.#rules[key]

        if (value.__proto__ === Object.prototype) {
          Object.assign(this.#rules, {
            [key]: 'object',
            ['$' + key]: value
          })
        }
      }
    }

    for (const key in this.#rules) {
      if (!key.startsWith('$')) {
        const value = this.#rules[key]

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

  #ruleHandler(name, options) {
    try {
      const handler = require(__dirname + '/rules/' + this.#configRules[name])

      return handler(options)
    } catch (err) {
      console.log(err)
    }
  }

  fails() {
    for (const { key, rules } of this.#formattedRules) {
      for (const rule of rules) {
        const message = this.#ruleHandler(rule.name, {
          request: this.#request,
          rules: this.#rules,
          options: this.#options,
          requestKey: key,
          requestValue: this.#request[key],
          ruleArg: rule.arg,
          errorMessage: {
            default: this.#errorMessages[rule.name],
            custom: this.#options.errorMessages?.[key]?.[rule.name]
          },
          errorMessagesWrapper: this.#errorMessagesWrapper
        })

        if (message === 'skip') {
          break
        } else if (message) {
          this.errors[key] = message

          break
        }
      }
    }

    return this.failed
  }

  get failed() {
    return !!Object.keys(this.errors).length
  }
}

module.exports = Validator
