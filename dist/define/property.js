"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Property = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Property =
/*#__PURE__*/
function () {
  function Property(object, name, value) {
    _classCallCheck(this, Property);

    _defineProperty(this, "enumerable", true);

    _defineProperty(this, "configurable", true);

    _defineProperty(this, "writable", true);

    _defineProperty(this, "object", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "value", void 0);

    this.object = object;
    this.name = name;
    this.value = value;
  }
  /**
   * Readonly props
   *
   * @return {Property} self
   */


  _createClass(Property, [{
    key: "readonly",
    value: function readonly() {
      this.writable = false;
      return this;
    }
    /**
     * Hidden props
     *
     * @return {Property} self
     */

  }, {
    key: "hidden",
    value: function hidden() {
      this.enumerable = false;
      return this;
    }
    /**
     * Final props
     *
     * @return {Property} self
     */

  }, {
    key: "final",
    value: function final() {
      this.configurable = false;
      return this;
    }
    /**
     * Simple var
     *
     * @return {any} value
     */

  }, {
    key: "var",
    value: function _var() {
      Object.defineProperty(this.object, this.name, {
        enumerable: this.enumerable,
        configurable: this.configurable,
        writable: this.writable,
        value: this.value
      });
      return this.value;
    }
    /**
     * getter var
     *
     * @return {any} value
     */

  }, {
    key: "getter",
    value: function getter() {
      if (typeof this.value !== 'function') {
        throw new Error('Getter must be a function: value');
      }

      Object.defineProperty(this.object, this.name, {
        enumerable: this.enumerable,
        configurable: this.configurable,
        get: this.value
      });
      return this.value;
    }
    /**
     * Setter var
     *
     * @return {any}
     */

  }, {
    key: "setter",
    value: function setter() {
      Object.defineProperty(this.object, this.name, {
        enumerable: this.enumerable,
        configurable: this.configurable,
        set: this.value
      });
      return this.value;
    }
  }]);

  return Property;
}();

exports.Property = Property;