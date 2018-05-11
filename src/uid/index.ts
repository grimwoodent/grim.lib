import { UIDQueue } from './queue';
import { UIDGenerator } from './generator';

export class UID {
    /**
     * Create queue of UIDs
     * @type {UIDQueue}
     */
    public static Queue = UIDQueue;

    /**
     * Generate new UID
     * @type {UIDGenerator}
     */
    public static Generator = UIDGenerator;
}
