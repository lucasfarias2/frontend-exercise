export class MultiSelectItem {

    private _order: number;

    public set order(order: number)
    {
        this._order = order;
    }

    public get order(): number 
    {
        return this._order - (this.isSelected ? Number.MAX_VALUE : 0);
    }

    constructor(public value: string, public isSelected: boolean, order: number)
    {
        this.value = value;
        this.isSelected = isSelected;
        this.order = order;
    }
}