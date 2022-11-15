import {EmployeesRepository} from "../../core/EmployeesRepository";
import {Employee} from "../../core/Employee";
import {OurDate} from "../../core/OurDate";
import fs from "fs";
import {DateRepresentation} from "./DateRepresentation";
import {CannotReadEmployeesException} from "../../core/CannotReadEmployeesException";

export class FileEmployeesRepository implements EmployeesRepository {
    private readonly path: string;

    constructor(path: string) {
        this.path = path;
    }

    public whoseBirthdayIs(today: OurDate): Array<Employee> {
        return this.allEmployees()
            .filter((employee) => employee.isBirthday(today));
    }

    private allEmployees(): Array<Employee> {
        const employees = new Array<Employee>();
        let data = this.readFileData();
        data.split(/\r?\n/).forEach((str: string) => {
            let employeeData = str.split(", ");
            const employee = new Employee(employeeData[1], employeeData[0],
                this.extractDate(employeeData[2]), employeeData[3]);
            employees.push(employee);
        });
        return employees;

    }

    private readFileData() {
        try {
            return fs.readFileSync(this.path, {encoding: 'utf8'});
        } catch (e) {
            throw new CannotReadEmployeesException(`cannot loadFrom file = '${this.path}'`);
        }
    }

    private extractDate(dateAsString: string): OurDate {
        try {
            return new DateRepresentation(dateAsString).toDate();
        } catch (e) {
            throw new CannotReadEmployeesException(`Badly formatted employee birth date in: '${dateAsString}'`);
        }
    }
}