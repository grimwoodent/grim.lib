import { expect } from 'chai';
import 'mocha';
import { Define } from '../src';

describe('Define', () => {
    describe('Var', () => {
        it('should add new property', () => {
            const obj = {};
            const propertyName = 'newProperty';
            const property = 'value';

            Define.property(obj, propertyName, property).var();

            expect((obj as any)[propertyName]).to.be.equals(property);
        });

        it('should add readonly property', () => {
            const obj = {};
            const propertyName = 'newProperty';
            const property = 'value';

            Define.property(obj, propertyName, property).readonly().var();

            expect(() => {
                obj[propertyName] = null;
            }).to.throw();
        });

        it('should undef property', () => {
            const obj = {};
            const propertyName = 'newProperty';
            const property = 'value';

            Define.property(obj, propertyName, property).var();

            expect((obj as any)[propertyName]).to.be.equals(property);

            Define.undef(obj, propertyName);

            expect((obj as any)[propertyName]).to.be.equals(undefined);
        });
    });

    describe('Getter', () => {
        it('should add getter', () => {
            const obj = {};
            const propertyName = 'newProperty';
            const property = () => 'value';

            Define.property(obj, propertyName, property).getter();

            expect(() => {
                obj[propertyName] = null;
            }).to.throw();
        });

        it('should not add is not function getter', () => {
            const obj = {};
            const propertyName = 'newProperty';
            const property = 'value';

            expect(() => {
                Define.property(obj, propertyName, property).getter();
            }).to.throw();
        });
    });
});
