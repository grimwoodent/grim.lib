"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};
class UIDGenerator {
    get next() {
        return Array(8)
            .fill('')
            .map(() => s4())
            .join('');
    }
    generate() {
        return this.next;
    }
}
exports.UIDGenerator = UIDGenerator;
//# sourceMappingURL=generator.js.map