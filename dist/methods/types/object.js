"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Validator = require(__dirname + '/../../Validator');

module.exports = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var rules, requestKey, requestValue, validationRules, validation;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rules = _ref.rules, requestKey = _ref.requestKey, requestValue = _ref.requestValue;

            if (!((requestValue === null || requestValue === void 0 ? void 0 : requestValue.__proto__) !== Object.prototype)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", 'This field must be a "object"');

          case 3:
            validationRules = rules['$' + requestKey];

            if (!validationRules) {
              _context.next = 10;
              break;
            }

            validation = new Validator(requestValue, validationRules);
            _context.next = 8;
            return validation.fails();

          case 8:
            if (!validation.failed) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", validation.errors);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();