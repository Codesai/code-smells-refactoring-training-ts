export class Movie {
    public static CHILDRENS: number = 2;
    public static REGULAR: number = 0;
    public static NEW_RELEASE: number = 1;

    private title: string;
    private priceCode: number;

    constructor(title: string, priceCode: number) {
        this.title = title;
        this.priceCode = priceCode;
    }

    public getPriceCode(): number {
        return this.priceCode;
    }

    public setPriceCode(code: number) {
        this.priceCode = code;
    }

    public getTitle(): string {
        return this.title;
    }

}