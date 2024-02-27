import {OurDate} from "../core/OurDate";
import {Employee} from "../core/Employee";
import {EmployeesRepository} from "../core/EmployeesRepository";
import {GreetingMessage} from "../core/GreetingMessage";
import {GreetingsSender} from "../infrastructure/GreetingsSender";

export class BirthdayService {
    private readonly _employeesRepository: EmployeesRepository;
    private _greetingsSender: GreetingsSender;

    constructor(employeeRepository: EmployeesRepository, greetingsSender: GreetingsSender) {
        this._employeesRepository = employeeRepository;
        this._greetingsSender = greetingsSender;
    }

    sendGreetings(date: OurDate): void {
        this._greetingsSender.send(this.greetingMessagesFor(this.employeesHavingBirthday(date)));
    }

    private greetingMessagesFor(employees: Array<Employee>): Array<GreetingMessage> {
        return GreetingMessage.generateForSome(employees);
    }

    private employeesHavingBirthday(today: OurDate): Array<Employee> {
        return this._employeesRepository.allEmployees().filter(
            (employee: Employee) => employee.isBirthday(today)
        );
    }
}
