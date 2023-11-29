import {FileEmployeesRepository} from "../../../src/infrastructure/repositories/FileEmployeesRepository";
import {OurDate} from "../../../src/core/OurDate";
import {ourDateFromString} from "../../helper/OurDateFactory";
import {CannotReadEmployeesException} from "../../../src/core/CannotReadEmployeesException";

describe('File Employee Repository', () => {

    let ANY_DATE: OurDate = ourDateFromString("2016/01/01");;

    it('fails when the file does not exist', () => {
        const employeesRepository = new FileEmployeesRepository("non-existing.file");

        try {
            employeesRepository.whoseBirthdayIs(ANY_DATE);
        } catch (exception) {
            expect(exception).toBeInstanceOf(CannotReadEmployeesException);
            expect(exception.message).toContain("cannot loadFrom file");
            expect(exception.message).toContain("non-existing.file");
        }
    });

    it('fails when the file does not have the necessary fields', () => {
        const employeesRepository = new FileEmployeesRepository("test/resources/wrong_data__wrong-date-format.csv");

        try {
            employeesRepository.whoseBirthdayIs(ANY_DATE);
        } catch (exception) {
            expect(exception.message).toContain("Badly formatted employee birth date in");
        }
    });

});