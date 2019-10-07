import {Component, Input, OnInit, Output} from '@angular/core';
import {Person} from '../models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input event: any;

  person: Person;
  ci: string;
  name: string;
  lastName: string;

  constructor() {
    this.person = new Person();
  }

  ngOnInit() {
  }
  save()
  {
    this.person.ci = this.ci;
    this.person.name = this.name;
    this.person.lastName = this.lastName;
  }
}
