export class Property {
    protected enumerable: boolean = true;

    protected configurable: boolean = true;

    protected writable: boolean = true;

    protected object: any;

    protected name: string;

    protected value: any;

    constructor(object: any, name: string, value: any) {
        this.object = object;
        this.name = name;
        this.value = value;
    }

    /**
     * Readonly props
     *
     * @return {Property} self
     */
    public readonly(): Property {
        this.writable = false;

        return this;
    }

    /**
     * Hidden props
     *
     * @return {Property} self
     */
    public hidden(): Property {
        this.enumerable = false;

        return this;
    }

    /**
     * Final props
     *
     * @return {Property} self
     */
    public final(): Property {
        this.configurable = false;

        return this;
    }

    /**
     * Simple var
     *
     * @return {any} value
     */
    public var(): any {
        Object.defineProperty(this.object, this.name, {
            enumerable: this.enumerable,
            configurable: this.configurable,
            writable: this.writable,
            value: this.value,
        });

        return this.value;
    }

    /**
     * getter var
     *
     * @return {any} value
     */
    public getter(): any {
        if (typeof(this.value) !== 'function') {
            throw new Error('Getter must be a function: value');
        }

        Object.defineProperty(this.object, this.name, {
            enumerable: this.enumerable,
            configurable: this.configurable,
            get: this.value,
        });

        return this.value;
    }

    /**
     * Setter var
     *
     * @return {any}
     */
    public setter(): any {
        Object.defineProperty(this.object, this.name, {
            enumerable: this.enumerable,
            configurable: this.configurable,
            set: this.value,
        });

        return this.value;
    }
}
