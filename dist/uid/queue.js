"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UIDQueue {
    constructor() {
        this.current = 1;
    }
    get next() {
        return this.current++;
    }
    getNext() {
        return this.next;
    }
}
exports.UIDQueue = UIDQueue;
//# sourceMappingURL=queue.js.map