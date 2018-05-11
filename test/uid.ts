import { expect } from 'chai';
import 'mocha';
import { UID } from '../src';

describe('UID', () => {
    it('should create queue', () => {
        const queue = new UID.Queue();

        expect(queue.next).to.be.equals(1);
        expect(queue.getNext()).to.be.equals(2);
        expect(queue.next).to.be.equals(3);
    });

    it('should create generator', () => {
        const generator = new UID.Generator();

        expect(generator.generate()).to.be.a('string');
    });
});
