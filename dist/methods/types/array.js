"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Validator = require(__dirname + '/../../Validator');

module.exports = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var rules, requestKey, requestValue, type, availableTypes, index, _iterator, _step, item, validationRules, elementIndex, _iterator2, _step2, element, validation, _validation;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rules = _ref.rules, requestKey = _ref.requestKey, requestValue = _ref.requestValue, type = _ref.ruleArg;

            if (Array.isArray(requestValue)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", 'This field must be a "array"');

          case 3:
            availableTypes = ['string', 'boolean', 'number', 'array', 'object'];

            if (!type) {
              _context.next = 61;
              break;
            }

            if (availableTypes.includes(type)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", 'The type you specified was not found in the list of available types.');

          case 7:
            index = 0;
            _iterator = _createForOfIteratorHelper(requestValue);
            _context.prev = 9;

            _iterator.s();

          case 11:
            if ((_step = _iterator.n()).done) {
              _context.next = 53;
              break;
            }

            item = _step.value;

            if (!(type === 'object' && item.__proto__ !== Object.prototype || type === 'array' && !Array.isArray(item) || _typeof(item) !== type && type !== 'object' && type !== 'array')) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", {
              message: "Array element must be of type \"".concat(type, "\""),
              index: index
            });

          case 15:
            validationRules = rules['$' + requestKey + ':' + type];

            if (!validationRules) {
              _context.next = 50;
              break;
            }

            if (!(type === 'array')) {
              _context.next = 44;
              break;
            }

            elementIndex = 0;
            _iterator2 = _createForOfIteratorHelper(item);
            _context.prev = 20;

            _iterator2.s();

          case 22:
            if ((_step2 = _iterator2.n()).done) {
              _context.next = 34;
              break;
            }

            element = _step2.value;
            validation = new Validator({
              message: element
            }, {
              message: validationRules
            });
            _context.next = 27;
            return validation.fails();

          case 27:
            if (!validation.failed) {
              _context.next = 31;
              break;
            }

            validation.errors.index = index;
            validation.errors.elementIndex = elementIndex;
            return _context.abrupt("return", validation.errors);

          case 31:
            elementIndex++;

          case 32:
            _context.next = 22;
            break;

          case 34:
            _context.next = 39;
            break;

          case 36:
            _context.prev = 36;
            _context.t0 = _context["catch"](20);

            _iterator2.e(_context.t0);

          case 39:
            _context.prev = 39;

            _iterator2.f();

            return _context.finish(39);

          case 42:
            _context.next = 50;
            break;

          case 44:
            _validation = new Validator(type === 'object' ? item : {
              message: item
            }, type === 'object' ? validationRules : {
              message: validationRules
            });
            _context.next = 47;
            return _validation.fails();

          case 47:
            if (!_validation.failed) {
              _context.next = 50;
              break;
            }

            _validation.errors.index = index;
            return _context.abrupt("return", _validation.errors);

          case 50:
            index++;

          case 51:
            _context.next = 11;
            break;

          case 53:
            _context.next = 58;
            break;

          case 55:
            _context.prev = 55;
            _context.t1 = _context["catch"](9);

            _iterator.e(_context.t1);

          case 58:
            _context.prev = 58;

            _iterator.f();

            return _context.finish(58);

          case 61:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[9, 55, 58, 61], [20, 36, 39, 42]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();