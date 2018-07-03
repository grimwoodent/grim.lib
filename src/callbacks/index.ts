type EventHandlerFn = (...args: any[]) => any;

interface IEventHandlerSetProps {
    [key: string]: EventHandlerFn;
}

interface IEventHandlerSet {
    [key: string]: EventHandlerFn[];
}

export class Callbacks {
    protected events: IEventHandlerSet = {};

    /**
     * @param {Object} events
     */
    constructor(events: IEventHandlerSetProps) {
        this.set(events);
    }

    /**
     * Установить события
     *
     * @param {Object} events
     *
     * @return {Callbacks} self
     */
    public set(events: IEventHandlerSetProps): Callbacks {
        Object.keys(events || {}).forEach((key) => {
            if (!this.events[key]) {
                this.events[key] = [];
            }

            const newEvents = Array.isArray(events[key])
                ? events[key]
                : [events[key]];

            newEvents.forEach((event) => {
                if (typeof(event) === 'function') {
                    this.events[key].push(event);
                }
            });
        });

        return this;
    }

    /**
     * Получить функцию по ключу
     *
     * @param {String} key
     *
     * @return {EventHandlerFn} callback
     */
    public get(key: string): EventHandlerFn {
        if (!this.has(key)) {
            return null;
        }

        const result = this.events[key];

        return result.length > 1
            ? result
            : result.pop();
    }

    /**
     * Возвращает установлена ли функция с таким ключом
     *
     * @param {String} key
     *
     * @return {Boolean}
     */
    public has(key: string): boolean {
        if (typeof(key) !== 'string') {
            return false;
        }

        return key && this.events[key] && !!this.events[key].length;
    }

    /**
     * Вызвать функцию по ключу с аргументами
     *
     * @param {String} key
     *
     * @return {any} result
     */
    public trigger(key: string, ...args: any[]): any {
        if (!this.has(key)) {
            return undefined;
        }

        const result = this.events[key].map((event) => event.apply(undefined, args));

        return result.length > 1
            ? result
            : result.pop();
    }

    /**
     * Возвращает установлена ли функция с таким ключом
     *
     * @deprecated
     *
     * @param {String} key
     *
     * @return {Boolean}
     */
    public isSet(key: string): boolean {
        return this.has(key);
    }
}
