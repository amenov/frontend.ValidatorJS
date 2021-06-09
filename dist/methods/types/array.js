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
      type = _ref.ruleArg;

  if (!Array.isArray(requestValue)) {
    return 'This field must be a "array"';
  }

  var availableTypes = ['string', 'boolean', 'number', 'array', 'object'];

  if (type) {
    if (!availableTypes.includes(type)) {
      return 'The type you specified was not found in the list of available types.';
    }

    var index = 0;

    var _iterator = _createForOfIteratorHelper(requestValue),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (type === 'object' && item.__proto__ !== Object.prototype || type === 'array' && !Array.isArray(item) || _typeof(item) !== type && type !== 'object' && type !== 'array') {
          return {
            message: "Array element must be of type \"".concat(type, "\""),
            index: index
          };
        }

        var validationRules = rules['$' + requestKey + ':' + type];

        if (validationRules) {
          if (type === 'array') {
            var elementIndex = 0;

            var _iterator2 = _createForOfIteratorHelper(item),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var element = _step2.value;
                var validation = new Validator({
                  message: element
                }, {
                  message: validationRules
                });
                validation.fails();

                if (validation.failed) {
                  validation.errors.index = index;
                  validation.errors.elementIndex = elementIndex;
                  return validation.errors;
                }

                elementIndex++;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else {
            var _validation = new Validator(type === 'object' ? item : {
              message: item
            }, type === 'object' ? validationRules : {
              message: validationRules
            });

            _validation.fails();

            if (_validation.failed) {
              _validation.errors.index = index;
              return _validation.errors;
            }
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