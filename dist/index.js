"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Define", {
  enumerable: true,
  get: function get() {
    return _define.Define;
  }
});
Object.defineProperty(exports, "Callbacks", {
  enumerable: true,
  get: function get() {
    return _callbacks.Callbacks;
  }
});
Object.defineProperty(exports, "Cookie", {
  enumerable: true,
  get: function get() {
    return _cookie.Cookie;
  }
});
Object.defineProperty(exports, "UID", {
  enumerable: true,
  get: function get() {
    return _uid.default;
  }
});
exports.Collection = void 0;

var _define = require("./define");

var _callbacks = require("./callbacks");

var _cookie = require("./cookie");

var _uid = _interopRequireDefault(require("@grimwoodent/uid"));

var Collection = _interopRequireWildcard(require("./collection"));

exports.Collection = Collection;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }