import {Movie} from "./Movie";

export class Rental {

    private readonly _movie: Movie;
    private readonly _daysRented: number;
    constructor(movie: Movie, daysRented: number) {
        this._movie = movie;
        this._daysRented = daysRented;
    }

    getDaysRented(): number {
        return this._daysRented;
    }

    getMovie(): Movie {
        return this._movie;
    }
}