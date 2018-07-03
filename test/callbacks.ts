import { expect } from 'chai';
import 'mocha';
import { Callbacks } from '../dist';

describe('Callbacks', () => {
    it('should set callback by constructor', () => {
        const doneCallback = () => {};
        const events = new Callbacks({ doneCallback });

        expect(events.get('doneCallback')).to.be.equals(doneCallback);
    });

    it('should set callback by method', () => {
        const doneCallback = () => {};
        const events = new Callbacks();

        events.set({ doneCallback });
        expect(events.get('doneCallback')).to.be.equals(doneCallback);
    });

    it('should set multiply callbacks', () => {
        const doneCallback1 = () => {};
        const doneCallback2 = () => {};
        const doneCallback = [doneCallback1, doneCallback2];
        const events = new Callbacks();

        events.set({ doneCallback });
        expect(events.get('doneCallback')).to.be.deep.equals(doneCallback);
    });

    it('should trigger callback', (done) => {
        const argValue = 'value';
        const doneCallback = (arg) => {
            expect(arg).to.be.equals(argValue);

            done();
        };
        const events = new Callbacks({ doneCallback });

        events.trigger('doneCallback', argValue);
    });

    it('should trigger multiply callbacks', (done) => {
        const argValue = 'value';
        let isDone = 0;
        const doneCallback1 = (arg) => {
            expect(arg).to.be.equals(argValue);

            isDone++;
            if (isDone === 2) {
                done();
            }
        };
        const doneCallback2 = (arg) => {
            expect(arg).to.be.equals(argValue);

            isDone++;
            if (isDone === 2) {
                done();
            }
        };
        const events = new Callbacks({
            doneCallback: [doneCallback1, doneCallback2],
        });

        events.trigger('doneCallback', argValue);
    });
});
