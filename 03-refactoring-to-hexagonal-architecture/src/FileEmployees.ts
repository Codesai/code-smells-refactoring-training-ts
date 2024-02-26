import fs from "fs";
import {Employee} from "./Employee";
import {Employees} from "./Employees";
import {DateRepresentation} from "./DateRepresentation";

export class FileEmployees implements Employees {
    private readonly fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }


    retrieveEmployees() {
        const employees = new Array<Employee>;
        const data = fs.readFileSync(this.fileName, {encoding: 'utf8'});
        data.split(/\r?\n/).forEach((str: string) => {
            let employeeData = str.split(", ");
            const employee = new Employee(
                employeeData[1],
                employeeData[0],
                employeeData[2],
                employeeData[3],
                DateRepresentation.toSlashDate(employeeData[2]));
            employees.push(employee)
        });
        return employees;
    }
}