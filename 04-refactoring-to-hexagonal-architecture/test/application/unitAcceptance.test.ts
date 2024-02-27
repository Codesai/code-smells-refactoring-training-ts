import {BirthdayService} from "../../src/application/BirthdayService";
import {anything, instance, mock, verify, when} from "ts-mockito";
import {EmployeesRepository} from "../../src/core/EmployeesRepository";
import {GreetingsSender} from "../../src/infrastructure/GreetingsSender";
import {date} from "../helper/OurDateFactory";
import {Employee} from "../../src/core/Employee";
import {GreetingMessage} from "../../src/core/GreetingMessage";

describe('BirthdayService', () => {
    const employeeRepository = mock<EmployeesRepository>()
    const greetingsSender = mock<GreetingsSender>()

    it('sends a greeting when employee is birthday', () => {
        const birthdayService = new BirthdayService(
            instance(employeeRepository),
            instance(greetingsSender)
        )
        const employees: Employee[] = [new Employee("John", date("1990/10/08"), "john.doe@foobar.com")]
        const messages = GreetingMessage.generateForSome(employees)

        when(employeeRepository.allEmployees()).thenReturn(employees)
        birthdayService.sendGreetings(date("2008/10/08"))

        verify(greetingsSender.send(anything())).once()
    });
})
