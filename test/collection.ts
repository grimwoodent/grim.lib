import { expect } from 'chai';
import 'mocha';
import { Collection } from '../src';

describe('Collection', () => {
    const strategyKey = 'strategy';
    let collection: Collection.IConstructor;

    it('should create collection', () => {
        expect(() => {
            collection = new Collection.Constructor({});
        }).to.not.throw();
    });

    it('should add strategy', () => {
        expect(() => {
            collection.addStrategy(strategyKey, new Collection.Strategy());
        }).to.not.throw();
    });

    it('should add element to strategy', () => {
        expect(() => {
            collection.addTo(strategyKey, 1);
            collection.addTo(strategyKey, 1);
            collection.addTo(strategyKey, 2);
        }).to.not.throw();

        expect(collection.getAllFrom(strategyKey)).to.be.deep.equals([1, 2]);
    });

    it('should remove element from strategy', () => {
        expect(() => {
            collection.removeFrom(strategyKey, 1);
        }).to.not.throw();

        expect(collection.getAllFrom(strategyKey)).to.be.deep.equals([2]);
    });

    it('should use extended strategy', () => {
        const newStrategyKey = 'newStrategy';
        const el1 = { value: 1};
        const el2 = { value: 2};

        class NewStrategy extends Collection.Strategy {
            public getIndex(c: Array<{ value?: any }>, element: { value?: any }) {
                return c.findIndex((collectionElement) => collectionElement.value === element.value);
            }
        }

        collection.addStrategy(newStrategyKey, new NewStrategy());
        collection.addTo(newStrategyKey, el1);
        collection.addTo(newStrategyKey, el1);
        collection.addTo(newStrategyKey, el2);

        expect(collection.getAllFrom(newStrategyKey)).to.be.deep.equals([el1, el2]);
    });
});
