export class Product {
    private _id:number;
    private _name: string;
    private _price: number
    private _amount: number;
    private _type:string;


    constructor(name: string, price: number, amount: number, type: string,id:number) {
        this._name = name;
        this._price = price;
        this._amount = amount;
        this._type = type;
        this._id=id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}