"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Strategy {
    /**
     * Get element index in collection
     *
     * @param {any[]} collection
     * @param element
     *
     * @return {number}
     */
    getIndex(collection, element) {
        return collection.findIndex((collectionElement) => collectionElement === element);
    }
    /**
     * Is element exist in collection
     *
     * @param {any[]} collection
     * @param element
     *
     * @return {boolean}
     */
    has(collection, element) {
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
    add(collection, element) {
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
    remove(collection, element) {
        if (!this.has(collection, element)) {
            return collection;
        }
        const idx = this.getIndex(collection, element);
        const result = [].concat(collection);
        result.splice(idx, 1);
        return result;
    }
}
exports.Strategy = Strategy;
//# sourceMappingURL=strategy.js.map