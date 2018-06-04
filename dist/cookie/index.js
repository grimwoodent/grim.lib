"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cookie = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Cookie =
/*#__PURE__*/
function () {
  _createClass(Cookie, null, [{
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

  function Cookie(name, value, expires, path, domain, secure) {
    _classCallCheck(this, Cookie);

    _defineProperty(this, "name", '');

    _defineProperty(this, "value", '');

    _defineProperty(this, "expires", null);

    _defineProperty(this, "path", null);

    _defineProperty(this, "domain", null);

    _defineProperty(this, "secure", null);

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
  }]);

  return Cookie;
}();

exports.Cookie = Cookie;