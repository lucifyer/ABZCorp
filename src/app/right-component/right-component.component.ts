import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-right-component',
  templateUrl: './right-component.component.html',
  styleUrls: ['./right-component.component.css']
})
export class RightComponentComponent implements OnInit {
  public employees = [
    {
      firstName: 'Dean',
      lastName: 'Jones',
      email: 'dean.jones@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Sr. Mangager',
      department: 'Design',
      onlineStat: 0,
      projectID: 1
    },
    {
      firstName: 'Emily',
      lastName: 'Clarke',
      email: 'emily.clarke@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Design',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Gary',
      lastName: 'Kristen',
      email: 'gary.k@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Engineer',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Hamilton',
      lastName: 'John',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Kartik',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 1
    }
  ];

  displayedColumns: string[] = [
    'firstName',
    'department',
    'email',
    'phone',
    'role'
  ];
  dataSource = new MatTableDataSource(this.employees);

  @ViewChild(MatSort)
  sort: MatSort;
  addMember: FormGroup;
  emailPattern: any = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  phonePattern: any = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
  showModal: boolean = false;

  @Input()
  data: any;
  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
    // console.log(this.data);
    //Filter employees based on project id
  }

  displayModal() {
    //Display the modal of form to add a new employee
    this.showModal = true;
  }

  constructor(private fb: FormBuilder) {
    this.addMember = this.fb.group({
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
      phone: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.phonePattern)
        ])
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.emailPattern)
        ])
      ],
      role: [null, null],
      department: [null, null]
    });
  }

  memberRegister(data) {
    console.log('\n\nForm Data: ', data);
    let newMember = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.emailId,
      phone: data.phone,
      role: data.role,
      department: data.department,
      onlineStat: 1,
      projectID: 1
    };

    this.employees.push(newMember);
    this.dataSource.sort = this.sort;
    this.showModal = false;
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
