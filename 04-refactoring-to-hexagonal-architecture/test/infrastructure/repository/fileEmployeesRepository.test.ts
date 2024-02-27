import {FileEmployeesRepository} from "../../../src/infrastructure/repositories/FileEmployeesRepository";
import {CannotReadEmployeesError} from "../../../src/core/CannotReadEmployeesError";
import {EmployeesRepository} from "../../../src/core/EmployeesRepository";
import {Employee} from "../../../src/core/Employee";
import {date} from "../../helper/OurDateFactory";

describe('File Employee Repository', () => {
    let employeesRepository: EmployeesRepository;

    it('reads the employees from files', () => {
        whenReadingFrom("test/resources/employee_data.txt");

        const employees = gettingAllEmployees()

        expect(employees.length).toBe(2)
        expect(employees[0]).toEqual(new Employee("John", date("1982/10/08"), "john.doe@foobar.com"))
    })

    it('fails when the file does not exist', () => {
        const path = "non-existing.file";
        whenReadingFrom(path);

        expect(gettingAllEmployees).toThrow(CannotReadEmployeesError);
        expect(gettingAllEmployees).toThrow(new RegExp(`^Cannot load from file: '${path}'$`));
    });

    it('fails when the birth date is not well formatted', () => {
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
