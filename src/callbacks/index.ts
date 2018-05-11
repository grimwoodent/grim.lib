type EventHandlerFn = (...args: any[]) => any;

interface IEventHandlerSet {
    [key: string]: EventHandlerFn;
}

export class Callbacks {
    protected events: IEventHandlerSet = {};

    /**
     * @param {Object} events
     */
    constructor(events: IEventHandlerSet) {
        this.set(events);
    }

    /**
     * Установить события
     *
     * @param {Object} events
     *
     * @return {Callbacks} self
     */
    public set(events: IEventHandlerSet): Callbacks {
        this.events = Object.assign(this.events, events);

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
        return this.events[key] || null;
    }

    /**
     * Вызвать функцию по ключу с аргументами
     *
     * @param {String} key
     *
     * @return {any} result
     */
    public trigger(key: string, ...args: any[]): any {
        if (!this.isSet(key)) {
            return undefined;
        }

        return this.events[key].apply(undefined, args);
    }

    /**
     * Возвращает установлена ли функция с таким ключом
     *
     * @param {String} key
     *
     * @return {Boolean}
     */
    public isSet(key: string): boolean {
        return key && this.events[key] && typeof(this.events[key]) === 'function';
    }
}
