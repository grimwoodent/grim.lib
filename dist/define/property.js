"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Property {
    constructor(object, name, value) {
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
    readonly() {
        this.writable = false;
        return this;
    }
    /**
     * Hidden props
     *
     * @return {Property} self
     */
    hidden() {
        this.enumerable = false;
        return this;
    }
    /**
     * Final props
     *
     * @return {Property} self
     */
    final() {
        this.configurable = false;
        return this;
    }
    /**
     * Simple var
     *
     * @return {any} value
     */
    var() {
        Object.defineProperty(this.object, this.name, {
            enumerable: this.enumerable,
            configurable: this.configurable,
            writable: this.writable,
            value: this.value,
        });
        return this.value;
    }
    /**
     * getter var
     *
     * @return {any} value
     */
    getter() {
        if (typeof (this.value) !== 'function') {
            throw new Error('Getter must be a function: value');
        }
        Object.defineProperty(this.object, this.name, {
            enumerable: this.enumerable,
            configurable: this.configurable,
            get: this.value,
        });
        return this.value;
    }
    /**
     * Setter var
     *
     * @return {any}
     */
    setter() {
        Object.defineProperty(this.object, this.name, {
            enumerable: this.enumerable,
            configurable: this.configurable,
            set: this.value,
        });
        return this.value;
    }
}
exports.Property = Property;
//# sourceMappingURL=property.js.map