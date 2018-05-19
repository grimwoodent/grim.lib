import { Property } from './property';

export class Define {
    /**
     * Define new var
     *
     * @param {Object} object
     * @param {String} name
     * @param {mixed} value
     *
     * @return {Property}
     */
    public static property(object: any, name: string, value: any): Property {
        return new Property(object, name, value);
    }

    public static undef(obj: any, name: string): any {
        delete obj[name];

        return obj;
    }
}
