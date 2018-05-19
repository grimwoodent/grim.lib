"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const property_1 = require("./property");
class Define {
    /**
     * Define new var
     *
     * @param {Object} object
     * @param {String} name
     * @param {mixed} value
     *
     * @return {Property}
     */
    static property(object, name, value) {
        return new property_1.Property(object, name, value);
    }
    static undef(obj, name) {
        delete obj[name];
        return obj;
    }
}
exports.Define = Define;
//# sourceMappingURL=index.js.map