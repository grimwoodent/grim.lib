/*!
 * GrimLib.js v1.0.3
 * https://github.com/grimwoodent/grim.lib
 *
 * Copyright 2018 GrimwoodEnt
 * Released under the MIT license
 *
 * Date: 2018-05-21T12:07:21.876Z
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Property =
/*#__PURE__*/
function () {
  function Property(object, name, value) {
    _classCallCheck(this, Property);

    this.enumerable = true;
    this.configurable = true;
    this.writable = true;
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
      return new Property(object, name, value);
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

var Callbacks =
/*#__PURE__*/
function () {
  /**
   * @param {Object} events
   */
  function Callbacks(events) {
    _classCallCheck(this, Callbacks);

    this.events = {};
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

var Cookie =
/*#__PURE__*/
function () {
  function Cookie(name, value, expires, path, domain, secure) {
    _classCallCheck(this, Cookie);

    this.name = '';
    this.value = '';
    this.expires = null;
    this.path = null;
    this.domain = null;
    this.secure = null;

    if (typeof name === 'string') {
      this.name = name;
      this.value = value;
      this.expires = expires;
      this.path = path;
      this.domain = domain;
      this.secure = secure;
    } else {
      var cookie = name;
      this.name = cookie.name;
      this.value = cookie.value;
      this.expires = cookie.expires;
      this.path = cookie.path;
      this.domain = cookie.domain;
      this.secure = cookie.secure;
    }
  }

  _createClass(Cookie, [{
    key: "set",
    value: function set() {
      if (!this.name) {
        return this;
      }

      var value = "".concat(this.name, "=").concat(encodeURI(this.value || ''));
      var expires = this.expires ? "; expires=".concat(encodeURI(this.expires)) : '';
      var path = this.path ? "; path=".concat(encodeURI(this.path)) : '';
      var domain = this.domain ? "; domain=".concat(encodeURI(this.domain)) : '';
      var secure = this.secure ? '; secure' : '';
      document.cookie = "".concat(value).concat(expires).concat(path).concat(domain).concat(secure);
      return this;
    }
  }, {
    key: "get",
    value: function get() {
      var name = this.name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1');
      var matches = document.cookie.match(new RegExp("(?:^|; )".concat(name, "=([^;]*)")));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.expires = -1;
      return this.set();
    }
  }], [{
    key: "getAll",
    value: function getAll() {
      var _this = this;

      var result = [];
      (document.cookie.match(/(?:^|; )([^;=]+)=([^;]*)/g) || []).forEach(function (matches) {
        var match = matches.match(/(?:^|; )([^;=]+)=([^;]*)/);

        if (match && match[1]) {
          result.push(new _this(match[1], match[2], null, '/'));
        }
      });
      return result;
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      var cookies = this.getAll();
      /** @var {Cookie} cookie */

      cookies.forEach(function (cookie) {
        cookie.remove();
      });
    }
  }]);

  return Cookie;
}();

var UIDQueue =
/*#__PURE__*/
function () {
  function UIDQueue() {
    _classCallCheck(this, UIDQueue);

    this.current = 1;
  }

  _createClass(UIDQueue, [{
    key: "getNext",
    value: function getNext() {
      return this.next;
    }
  }, {
    key: "next",
    get: function get() {
      return this.current++;
    }
  }]);

  return UIDQueue;
}();

var s4 = function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

var UIDGenerator =
/*#__PURE__*/
function () {
  function UIDGenerator() {
    _classCallCheck(this, UIDGenerator);
  }

  _createClass(UIDGenerator, [{
    key: "generate",
    value: function generate() {
      return this.next;
    }
  }, {
    key: "next",
    get: function get() {
      return Array(8).fill('').map(function () {
        return s4();
      }).join('');
    }
  }]);

  return UIDGenerator;
}();

var UID = function UID() {
  _classCallCheck(this, UID);
};
/**
 * Create queue of UIDs
 * @type {UIDQueue}
 */

UID.Queue = UIDQueue;
/**
 * Generate new UID
 * @type {UIDGenerator}
 */

UID.Generator = UIDGenerator;

var Collections =
/*#__PURE__*/
function () {
  function Collections(strategies) {
    var _this = this;

    _classCallCheck(this, Collections);

    this.strategies = {};
    this.storages = {};
    Object.keys(strategies).forEach(function (key) {
      _this.addStrategy(key, strategies[key]);
    });
  }
  /**
   * Replace all elements in collection
   *
   * @param {string} key
   * @param {any[]} elements
   *
   * @return {ICollections}
   */


  _createClass(Collections, [{
    key: "replaceAllIn",
    value: function replaceAllIn(key, elements) {
      this.storages[key] = elements;
      return this;
    }
    /**
     * Add element to collection
     *
     * @param {string} key
     * @param element
     *
     * @return {ICollections}
     */

  }, {
    key: "addTo",
    value: function addTo(key, element) {
      var strategy = this.getStrategy(key);
      var storage = this.getStorage(key);
      this.replaceAllIn(key, strategy.add(storage, element));
      return this;
    }
    /**
     * Remove element from collection
     *
     * @param {string} key
     * @param element
     *
     * @return {ICollections}
     */

  }, {
    key: "removeFrom",
    value: function removeFrom(key, element) {
      var strategy = this.getStrategy(key);
      var storage = this.getStorage(key);
      this.replaceAllIn(key, strategy.remove(storage, element));
      return this;
    }
    /**
     * Is element exist in collection
     *
     * @param {string} key
     * @param element
     *
     * @return {boolean}
     */

  }, {
    key: "hasIn",
    value: function hasIn(key, element) {
      var strategy = this.getStrategy(key);
      var storage = this.getStorage(key);
      return strategy.has(storage, element);
    }
    /**
     * Clear collection
     *
     * @param {string} key
     *
     * @return {ICollections}
     */

  }, {
    key: "clear",
    value: function clear(key) {
      this.replaceAllIn(key, []);
      return this;
    }
    /**
     * Get all elements from collection
     *
     * @param {string} key
     *
     * @return {any[]}
     */

  }, {
    key: "getAllFrom",
    value: function getAllFrom(key) {
      return this.getStorage(key);
    }
    /**
     * Is collection is empty
     *
     * @param {string} key
     *
     * @return {boolean}
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(key) {
      return !this.getStorage(key).length;
    }
    /**
     * Get all keys of collections
     *
     * @return {string[]}
     */

  }, {
    key: "keys",
    value: function keys() {
      return Object.keys(this.storages);
    }
    /**
     * Add collection strategy
     *
     * @param {string} key
     * @param {IStrategy} strategy
     * @return {ICollections}
     */

  }, {
    key: "addStrategy",
    value: function addStrategy(key, strategy) {
      if (this.strategies[key]) {
        throw new Error("".concat(key, " strategy already exist"));
      }

      this.strategies[key] = strategy;
      this.storages[key] = [];
      return this;
    }
    /**
     * Remove collection strategy
     *
     * @param {string} key
     * @return {ICollections}
     */

  }, {
    key: "removeStrategy",
    value: function removeStrategy(key) {
      if (!this.strategies[key]) {
        throw new Error("".concat(key, " strategy not found"));
      }

      this.strategies[key] = null;
      this.storages[key] = null;
      return this;
    }
    /**
     * Get collection by key
     *
     * @param {string} key
     *
     * @return {any[]}
     */

  }, {
    key: "getStorage",
    value: function getStorage(key) {
      return this.storages[key] || [];
    }
    /**
     * Get strategy for collection by key
     *
     * @param {string} key
     *
     * @return {IStrategy}
     */

  }, {
    key: "getStrategy",
    value: function getStrategy(key) {
      if (!this.strategies[key]) {
        throw new Error("".concat(key, " strategy not found"));
      }

      return this.strategies[key];
    }
  }]);

  return Collections;
}();

var Strategy =
/*#__PURE__*/
function () {
  function Strategy() {
    _classCallCheck(this, Strategy);
  }

  _createClass(Strategy, [{
    key: "getIndex",

    /**
     * Get element index in collection
     *
     * @param {any[]} collection
     * @param element
     *
     * @return {number}
     */
    value: function getIndex(collection, element) {
      return collection.findIndex(function (collectionElement) {
        return collectionElement === element;
      });
    }
    /**
     * Is element exist in collection
     *
     * @param {any[]} collection
     * @param element
     *
     * @return {boolean}
     */

  }, {
    key: "has",
    value: function has(collection, element) {
      return !!~this.getIndex(collection, element);
    }
    /**
     * Add element to collection
     *
     * @param {any[]} collection
     * @param element
     *
     * @return {any[]}
     */

  }, {
    key: "add",
    value: function add(collection, element) {
      if (this.has(collection, element)) {
        return collection;
      }

      return [].concat(collection, element);
    }
    /**
     * Remove element from collection
     *
     * @param {any[]} collection
     * @param element
     *
     * @return {any[]}
     */

  }, {
    key: "remove",
    value: function remove(collection, element) {
      if (!this.has(collection, element)) {
        return collection;
      }

      var idx = this.getIndex(collection, element);
      var result = [].concat(collection);
      return result;
    }
  }]);

  return Strategy;
}();



var index = /*#__PURE__*/Object.freeze({
  Constructor: Collections,
  Strategy: Strategy
});

exports.Define = Define;
exports.Callbacks = Callbacks;
exports.Cookie = Cookie;
exports.UID = UID;
exports.Collection = index;
