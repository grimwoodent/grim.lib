"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Callbacks {
    /**
     * @param {Object} events
     */
    constructor(events) {
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
    set(events) {
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
    get(key) {
        return this.events[key] || null;
    }
    /**
     * Вызвать функцию по ключу с аргументами
     *
     * @param {String} key
     *
     * @return {any} result
     */
    trigger(key, ...args) {
        if (!this.isSet(key)) {
            return undefined;
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
    isSet(key) {
        return key && this.events[key] && typeof (this.events[key]) === 'function';
    }
}
exports.Callbacks = Callbacks;
//# sourceMappingURL=index.js.map