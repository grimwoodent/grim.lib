function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export var Callbacks =
/*#__PURE__*/
function () {
  /**
   * @param {Object} events
   */
  function Callbacks(events) {
    _classCallCheck(this, Callbacks);

    _defineProperty(this, "events", {});

    this.set(events);
  }
  /**
   * Установить события
   *
   * @param {Object} events
   *
   * @return {Callbacks} self
   */


  _createClass(Callbacks, [{
    key: "set",
    value: function set(events) {
      this.events = Object.assign(this.events, events);
      return this;
    }
    /**
     * Получить функцию по ключу
     *
     * @param {String} key
     *
     * @return {EventHandlerFn} callback
     */

  }, {
    key: "get",
    value: function get(key) {
      return this.events[key] || null;
    }
    /**
     * Вызвать функцию по ключу с аргументами
     *
     * @param {String} key
     *
     * @return {any} result
     */

  }, {
    key: "trigger",
    value: function trigger(key) {
      if (!this.isSet(key)) {
        return undefined;
      }

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return this.events[key].apply(undefined, args);
    }
    /**
     * Возвращает установлена ли функция с таким ключом
     *
     * @param {String} key
     *
     * @return {Boolean}
     */

  }, {
    key: "isSet",
    value: function isSet(key) {
      return key && this.events[key] && typeof this.events[key] === 'function';
    }
  }]);

  return Callbacks;
}();