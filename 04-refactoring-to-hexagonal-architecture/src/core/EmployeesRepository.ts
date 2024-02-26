import {Employee} from "./Employee";

export interface EmployeesRepository {
    allEmployees(): Array<Employee>;
}