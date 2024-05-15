import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  constructor(private employeeService: EmployeeService) { }

  getAllEmps = () => {
    console.log('getAllEmps');
    this.employeeService.getAllEmployees()
      .subscribe({
        next: (response) => {
          console.log(response);
          // code 
        },
        error: (error) => { console.error(error); }
      });
  }

  getEmpById = (id: string) => {
    console.log(id);
    this.employeeService.getEmployeeById(id)
      .subscribe({
        next: (response) => {
          console.log(response);
          // code 
        },
        error: (error) => { console.error(error); }
      });
  };

}


