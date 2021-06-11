"use strict";

var locale = {
  // COMPUTE
  as: function as(requestKey, targetKey) {
    return "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \"".concat(requestKey, "\" \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E \u043F\u043E\u043B\u044F \"").concat(targetKey, "\"");
  },
  between: {
    typeError: 'Тип может быть только: string, number, array',
    max: function max(num) {
      return "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C: ".concat(num);
    },
    min: function min(num) {
      return "\u041C\u0438\u043D\u0438\u043C\u0443\u043C: ".concat(num);
    }
  },
  length: function length(num) {
    return "The length should be: ".concat(num);
  },
  max: {
    typeError: 'Тип может быть только: string, number, array',
    main: function main(num) {
      return "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C: ".concat(num);
    }
  },
  min: {
    typeError: 'Тип может быть только: string, number, array',
    main: function main(num) {
      return "\u041C\u0438\u043D\u0438\u043C\u0443\u043C: ".concat(num);
    }
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
    expectedType: function expectedType(type) {
      return "\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u0438\u043C\u0435\u0442\u044C \u0442\u0438\u043F \"".concat(type, "\"");
    }
  },
  "boolean": 'Это поле должно быть "boolean"',
  number: 'Это поле должно быть "number"',
  object: 'Это поле должно быть "object"',
  string: 'Это поле должно быть "string"'
};
module.exports = locale;