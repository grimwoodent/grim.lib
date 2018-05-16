"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Collections {
    constructor(strategies) {
        this.strategies = {};
        this.storages = {};
        Object.keys(strategies).forEach((key) => {
            this.addStrategy(key, strategies[key]);
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
    replaceAllIn(key, elements) {
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
    addTo(key, element) {
        const strategy = this.getStrategy(key);
        const storage = this.getStorage(key);
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
    removeFrom(key, element) {
        const strategy = this.getStrategy(key);
        const storage = this.getStorage(key);
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
    hasIn(key, element) {
        const strategy = this.getStrategy(key);
        const storage = this.getStorage(key);
        return strategy.has(storage, element);
    }
    /**
     * Clear collection
     *
     * @param {string} key
     *
     * @return {ICollections}
     */
    clear(key) {
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
    getAllFrom(key) {
        return this.getStorage(key);
    }
    /**
     * Is collection is empty
     *
     * @param {string} key
     *
     * @return {boolean}
     */
    isEmpty(key) {
        return !this.getStorage(key).length;
    }
    /**
     * Get all keys of collections
     *
     * @return {string[]}
     */
    keys() {
        return Object.keys(this.storages);
    }
    /**
     * Add collection strategy
     *
     * @param {string} key
     * @param {IStrategy} strategy
     * @return {ICollections}
     */
    addStrategy(key, strategy) {
        if (this.strategies[key]) {
            throw new Error(`${key} strategy already exist`);
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
    removeStrategy(key) {
        if (!this.strategies[key]) {
            throw new Error(`${key} strategy not found`);
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
    getStorage(key) {
        return this.storages[key] || [];
    }
    /**
     * Get strategy for collection by key
     *
     * @param {string} key
     *
     * @return {IStrategy}
     */
    getStrategy(key) {
        if (!this.strategies[key]) {
            throw new Error(`${key} strategy not found`);
        }
        return this.strategies[key];
    }
}
exports.Collections = Collections;
//# sourceMappingURL=constructor.js.map