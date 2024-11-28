import {FileEmployeesRepository} from "../../../src/infrastructure/repositories/FileEmployeesRepository";
import {CannotReadEmployeesError} from "../../../src/core/CannotReadEmployeesError";
import {EmployeesRepository} from "../../../src/core/EmployeesRepository";
import {Employee} from "../../../src/core/Employee";

describe('File Employee Repository', () => {
    let employeesRepository: EmployeesRepository;

    it('fails when the file does not exist', () => {
        whenReadingFrom("non-existing.file");

        expect(gettingAllEmployees).toThrow(CannotReadEmployeesError);
    });

    it('fails when the birth date is not well formatted', () => {
        whenReadingFrom("test/resources/wrong_data_format.csv");

        expect(gettingAllEmployees).toThrow(CannotReadEmployeesError);
    });

    function gettingAllEmployees(): Employee[] {
        return employeesRepository.allEmployees();
    }

    function whenReadingFrom(path: string): void {
        employeesRepository = new FileEmployeesRepository(path);
    }
});
