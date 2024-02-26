import {Rental} from "./Rental";
import {Movie} from "./Movie";

export class Customer {

    private readonly _name: string;
    private readonly _rentals: Rental[];
    constructor(name: string) {
        this._name = name;
        this._rentals = [];
    }

    addRental(rental: Rental): void {
        this._rentals.push(rental);
    }

    getName(): string {
        return this._name;
    }

    statement(): string {
        let totalAmount = 0;
        let frequentRenterPoints = 0;
        const rentals = this._rentals.entries();
        let result = "Rental Record for " + this.getName() + "\n";

        for(const [index, each] of rentals) {
            let thisAmount = 0;

            // determines the amount for each line
            switch (each.getMovie().getPriceCode()) {
                case Movie.REGULAR:
                    thisAmount += 2;
                    if (each.getDaysRented() > 2)
                        thisAmount += (each.getDaysRented() - 2) * 1.5;
                    break;
                case Movie.NEW_RELEASE:
                    thisAmount += each.getDaysRented() * 3;
                    break;
                case Movie.CHILDREN:
                    thisAmount += 1.5;
                    if (each.getDaysRented() > 3)
                        thisAmount += (each.getDaysRented() - 3) * 1.5;
                    break;
            }

            frequentRenterPoints++;

            if (each.getMovie().getPriceCode() == Movie.NEW_RELEASE
                && each.getDaysRented() > 1)
                frequentRenterPoints++;

            result += "\t" + each.getMovie().getTitle() + "\t"
                + new String(thisAmount.toFixed(1)) + "\n";
            totalAmount += thisAmount;

        }

        result += "You owed " + new String(totalAmount.toFixed(1)) + "\n";
        result += "You earned " + new String(frequentRenterPoints) + " frequent renter points\n";

        return result;
    }
}