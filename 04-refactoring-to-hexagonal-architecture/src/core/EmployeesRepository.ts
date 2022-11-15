import {OurDate} from "./OurDate";
import {Employee} from "./Employee";

export interface EmployeesRepository {
    whoseBirthdayIs(today: OurDate): Array<Employee>
}