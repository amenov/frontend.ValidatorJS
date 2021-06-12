const locale = {
  // COMPUTE
  as: (requestKey, targetKey) =>
    `Значение поля "${requestKey}" не соответствует значению поля "${targetKey}"`,
  between: {
    typeError: 'Тип может быть только: string, number, array',
    max: (num) => `Максимум: ${num}`,
    min: (num) => `Минимум: ${num}`
  },
  length: (num) => `The length should be: ${num}`,
  max: {
    typeError: 'Тип может быть только: string, number, array',
    main: (num) => `Максимум: ${num}`
  },
  min: {
    typeError: 'Тип может быть только: string, number, array',
    main: (num) => `Минимум: ${num}`
  },
  required: 'Обязательно',

  // ENTITIES
  date: 'Неверная дата',
  email: 'Неверный email',
  tel: {
    typeError: 'Тип может быть только "string"',
    main: 'Неверный номер телефона',
    countryCode: 'Неверный код страны'
  },

  // TYPES
  array: {
    main: 'Тип может быть только "array"',
    typeNotSupported: 'Указанный вами тип не найден в списке доступных типов',
    expectedType: (type) => `Элемент массива должен иметь тип "${type}"`
  },
  boolean: 'Это поле должно быть "boolean"',
  number: 'Это поле должно быть "number"',
  object: 'Это поле должно быть "object"',
  string: 'Это поле должно быть "string"'
}

module.exports = locale
