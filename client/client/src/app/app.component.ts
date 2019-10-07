import { Component } from '@angular/core';
import { User } from './user/model/user';
import {Employee} from './models/employee';
import {Person} from './models/person';

@Component({
  selector: 'app-raul',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // templete: `
  //   <system-message></system-message>
  // `
})
export class AppComponent{
  title = 'client';
// 30 sept
  person: Person;
  employee: Employee;
//fin
  // userList: User[];
  //
  // name: string;
  // email: string;
  /**
   *
   */
  constructor() {
// 30 sept
    this.employee = new Employee();
    this.person = new Person();
//fin
    // console.log(this.listPerson);
    // this.name='';
    // this.email='';
    // this.userList = [];
    // this.listPerson = [this.name,this.email];
  }
  save()
  {
    // var user = new User;
    // user.name = this.name;
    // user.email = this.email;
    //
    // console.log(this.name +" "+ this.email);
    // console.log(user);
    // this.userList.push(user);
    // console.log(this.userList);

  }
}
