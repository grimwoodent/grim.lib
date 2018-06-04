import { expect } from 'chai';
import 'mocha';
import { Callbacks } from '../dist';

describe('Callbacks', () => {
    it('should add callback', (done) => {
        const argValue = 'value';
        const events = new Callbacks({
            done: (arg) => {
                expect(arg).to.be.equals(argValue);

                done();
            },
        });

        events.trigger('done', argValue);
    });
});
