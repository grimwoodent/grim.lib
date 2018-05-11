"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = require("./queue");
const generator_1 = require("./generator");
class UID {
}
/**
 * Create queue of UIDs
 * @type {UIDQueue}
 */
UID.Queue = queue_1.UIDQueue;
/**
 * Generate new UID
 * @type {UIDGenerator}
 */
UID.Generator = generator_1.UIDGenerator;
exports.UID = UID;
//# sourceMappingURL=index.js.map