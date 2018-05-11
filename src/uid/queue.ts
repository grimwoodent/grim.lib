export class UIDQueue {
    protected current: number = 1;

    public get next(): number {
        return this.current++;
    }

    public getNext(): number {
        return this.next;
    }
}
