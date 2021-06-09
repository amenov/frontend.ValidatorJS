"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _formattedRules = /*#__PURE__*/new WeakMap();

var _getRuleHandler = /*#__PURE__*/new WeakSet();

var Validator = /*#__PURE__*/function () {
  function Validator(request, _rules) {
    _classCallCheck(this, Validator);

    _getRuleHandler.add(this);

    _formattedRules.set(this, {
      get: _get_formattedRules,
      set: void 0
    });

    this.request = request;
    this.rules = _rules;
    this.errors = {};
  }

  _createClass(Validator, [{
    key: "failed",
    get: function get() {
      return !!Object.keys(this.errors).length;
    }
  }, {
    key: "fails",
    value: function fails() {
      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _formattedRules)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _step.value,
              key = _step$value.key,
              rules = _step$value.rules;

          var _iterator2 = _createForOfIteratorHelper(rules),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var rule = _step2.value;

              try {
                var ruleHandler = _classPrivateMethodGet(this, _getRuleHandler, _getRuleHandler2).call(this, rule.name);

                var message = ruleHandler({
                  request: this.request,
                  requestKey: key,
                  requestValue: this.request[key],
                  ruleArg: rule.arg,
                  rules: this.rules
                });

                if (message === 'skip') {
                  break;
                } else if (message) {
                  this.errors[key] = message;
                  break;
                }
              } catch (err) {
                console.log(err);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return this.failed;
    }
  }]);

  return Validator;
}();

function _get_formattedRules() {
  var formattedRules = [];

  for (var key in this.rules) {
    if (!key.startsWith('$')) {
      var value = this.rules[key];

      if (value.__proto__ === Object.prototype) {
        var _Object$assign;

        Object.assign(this.rules, (_Object$assign = {}, _defineProperty(_Object$assign, key, 'object'), _defineProperty(_Object$assign, '$' + key, value), _Object$assign));
      }
    }
  }

  for (var _key in this.rules) {
    if (!_key.startsWith('$')) {
      var _value = this.rules[_key];

      if (_value && typeof _value === 'string') {
        var rules = [];

        var _iterator3 = _createForOfIteratorHelper(_value.split('|')),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var rule = _step3.value;
            var obj = {};

            if (rule.includes(':')) {
              var _rule$split = rule.split(':'),
                  _rule$split2 = _slicedToArray(_rule$split, 2),
                  name = _rule$split2[0],
                  arg = _rule$split2[1];

              obj['name'] = name;
              obj['arg'] = arg;
            } else {
              obj['name'] = rule;
            }

            rules.push(obj);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        formattedRules.push({
          key: _key,
          rules: rules
        });
      }
    }
  }

  return formattedRules;
}

function _getRuleHandler2(name) {
  var methods = require(__dirname + '/methods.json');

  var handler = require(__dirname + '/methods/' + methods[name]);

  return handler;
}

module.exports = Validator;