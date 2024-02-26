import {FileEmployeesRepository} from "../../../src/infrastructure/repositories/FileEmployeesRepository";
import {CannotReadEmployeesError} from "../../../src/core/CannotReadEmployeesError";
import {EmployeesRepository} from "../../../src/core/EmployeesRepository";
import {Employee} from "../../../src/core/Employee";

describe('File Employee Repository', () => {
    let employeesRepository: EmployeesRepository;

    it('fails when the file does not exist', () => {
        const path = "non-existing.file";
        whenReadingFrom(path);

        expect(gettingAllEmployees).toThrow(CannotReadEmployeesError);
        expect(gettingAllEmployees).toThrow(new RegExp(`^Cannot load from file: '${path}'$`));
    });

    it('fails when the file does not have the necessary fields', () => {
        whenReadingFrom("test/resources/wrong_data_format.csv");

        expect(gettingAllEmployees).toThrow(CannotReadEmployeesError);
        expect(gettingAllEmployees).toThrow(/^Badly formatted employee birth date: '2016-01-01'$/);
    });

    function gettingAllEmployees(): Employee[] {
        return employeesRepository.allEmployees();
    }

    function whenReadingFrom(path: string): void {
        employeesRepository = new FileEmployeesRepository(path);
    }
});
