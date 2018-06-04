"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Define = void 0;

var _property = require("./property");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Define =
/*#__PURE__*/
function () {
  function Define() {
    _classCallCheck(this, Define);
  }

  _createClass(Define, null, [{
    key: "property",

    /**
     * Define new var
     *
     * @param {Object} object
     * @param {String} name
     * @param {mixed} value
     *
     * @return {Property}
     */
    value: function property(object, name, value) {
      return new _property.Property(object, name, value);
    }
  }, {
    key: "undef",
    value: function undef(obj, name) {
      delete obj[name];
      return obj;
    }
  }]);

  return Define;
}();

exports.Define = Define;