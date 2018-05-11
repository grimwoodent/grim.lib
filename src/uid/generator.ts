const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};

export class UIDGenerator {
    public get next(): string {
        return Array(8)
            .fill('')
            .map(() => s4())
            .join('');
    }

    public generate(): string {
        return this.next;
    }
}
