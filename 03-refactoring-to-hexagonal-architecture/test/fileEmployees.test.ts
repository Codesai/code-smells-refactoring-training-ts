import {FileEmployees} from "../src/FileEmployees";
import {Employee} from "../src/Employee";
import {DateRepresentation} from "../src/DateRepresentation";

describe("File employees", () => {
    it('should read from file', () => {
        const fileName = "test/resources/employee_data.txt";

        const fileEmployees = new FileEmployees(fileName)

        const employees = fileEmployees.retrieveEmployees();

        expect(employees.length).toEqual(3)// also read headers
        expect(new Employee("John", "Doe", "1982/10/08", "john.doe@foobar.com", DateRepresentation.toSlashDate("1982/10/08"))).toEqual(employees[1])
    })
})