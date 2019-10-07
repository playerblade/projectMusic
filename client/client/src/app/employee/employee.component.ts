import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../models/employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {



  employee: Employee;
  salary: number;
  sure: boolean;

  constructor() {
    this.employee = new Employee();
  }

  save()
  {
    this.employee.salary = this.salary;
    this.employee.sure = this.sure;
  }

  ngOnInit() {

  }

  createObject()
  {
    console.log(this.employee);
  }


}
