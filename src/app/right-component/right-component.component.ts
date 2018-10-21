import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-component',
  templateUrl: './right-component.component.html',
  styleUrls: ['./right-component.component.css']
})
export class RightComponentComponent implements OnInit {
  public employees = [
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '1232342342',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    }
  ];

  @Input()
  data: any;
  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
    console.log(this.data);
    //Filter employees based on project id
  }

  constructor() {}

  ngOnInit() {}
}
