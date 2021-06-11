"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Validator = require(__dirname + '/../../Validator');

module.exports = function (_ref) {
  var rules = _ref.rules,
      requestKey = _ref.requestKey,
      requestValue = _ref.requestValue,
      type = _ref.ruleArg,
      options = _ref.options,
      errorMessage = _ref.errorMessage;

  if (errorMessage.custom) {
    errorMessage = Object.assign(errorMessage["default"], errorMessage.custom);
  }

  if (!Array.isArray(requestValue)) {
    return errorMessage.main;
  }

  var availableTypes = ['string', 'boolean', 'number', 'object'];

  if (type) {
    if (!availableTypes.includes(type)) {
      return errorMessage.typeNotSupported;
    }

    var index = 0;

    var _iterator = _createForOfIteratorHelper(requestValue),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (type === 'object' && item.__proto__ !== Object.prototype || _typeof(item) !== type && type !== 'object') {
          return {
            message: errorMessage.expectedType(type),
            index: index
          };
        }

        var validationRules = rules['$' + requestKey + ':' + type];

        if (validationRules) {
          var wrapper = function wrapper(value) {
            return type === 'object' ? value : {
              message: value
            };
          };

          if (options.errorMessages[requestKey] && options.errorMessages[requestKey][type]) {
            Object.assign(options.errorMessages, wrapper(options.errorMessages[requestKey][type]));
            delete options.errorMessages[requestKey];
          }

          var validation = new Validator(wrapper(item), wrapper(validationRules), options);
          validation.fails();

          if (validation.failed) {
            validation.errors.index = index;
            return validation.errors;
          }
        }

        index++;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
};