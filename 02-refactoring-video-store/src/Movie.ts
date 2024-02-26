export class Movie {
    public static CHILDREN: number = 2;
    public static REGULAR: number = 0;
    public static NEW_RELEASE: number = 1;

    private readonly _title: string;
    private _priceCode: number;

    constructor(title: string, priceCode: number) {
        this._title = title;
        this._priceCode = priceCode;
    }

    getPriceCode(): number {
        return this._priceCode;
    }

    setPriceCode(code: number): void {
        this._priceCode = code;
    }

    getTitle(): string {
        return this._title;
    }
}