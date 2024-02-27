import {EmployeesRepository} from "../../core/EmployeesRepository";
import {Employee} from "../../core/Employee";
import {OurDate} from "../../core/OurDate";
import fs from "fs";
import {DateRepresentation} from "./DateRepresentation";
import {CannotReadEmployeesError} from "../../core/CannotReadEmployeesError";

export class FileEmployeesRepository implements EmployeesRepository {
    private readonly _path: string;

    constructor(path: string) {
        this._path = path;
    }

    allEmployees(): Array<Employee> {
        const employees: Array<Employee> = [];
        this.readFileLines().forEach(
            (line: string) => {
                const employeeData = line.split(", ");
                employees.push(this.createEmployeeFrom(employeeData));
            }
        );
        return employees;
    }

    private createEmployeeFrom(employeeData: string[]): Employee {
        return new Employee(getFirstName(), extractDate(), getEmail());

        function getFirstName(): string {
            return employeeData[1];
        }
        function extractDate(): OurDate {
            const dateAsString = employeeData[2];
            try {
                return new DateRepresentation(dateAsString).toDate();
            } catch (e) {
                throw new CannotReadEmployeesError(`Badly formatted employee birth date: '${dateAsString}'`);
            }
        }

        function getEmail(): string {
            return employeeData[3];
        }
    }

    private readFileLines(): string[] {
        try {
            let lines = fs.readFileSync(this._path, {encoding: 'utf8'}).split(/\r?\n/);
            return removeHeader(lines);
        } catch (e) {
            throw new CannotReadEmployeesError(
                `Cannot load from file: '${this._path}'`
            );
        }

        function removeHeader(lines: string[]): string[] {
            return lines.slice(1);
        }
    }
}