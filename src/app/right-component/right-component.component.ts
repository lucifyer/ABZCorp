import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-right-component',
  templateUrl: './right-component.component.html',
  styleUrls: ['./right-component.component.css']
})
export class RightComponentComponent implements OnInit {
  public initEmployees = [
    {
      firstName: 'Dean',
      lastName: 'Jones',
      email: 'dean.jones@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Sr. Mangager',
      department: 'Design',
      onlineStat: 0,
      projectID: 2
    },
    {
      firstName: 'Emily',
      lastName: 'Clarke',
      email: 'emily.clarke@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Design',
      onlineStat: 1,
      projectID: 0
    },
    {
      firstName: 'Gary',
      lastName: 'Kristen',
      email: 'gary.k@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Engineer',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 0
    },
    {
      firstName: 'Hamilton',
      lastName: 'John',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 3
    },
    {
      firstName: 'Kartik',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 3
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 4
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 4
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 5
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 0
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 0
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 0
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
      projectID: 2
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'IT',
      onlineStat: 1,
      projectID: 2
    }
  ];
  public employees = [];
  projectName: string;
  onlineCount: number = 0;

  roles: Object = [
    { value: 'Manager' },
    { value: 'Sr. Manager' },
    { value: 'Tech Lead' },
    { value: 'Engineer' }
  ];

  departments: Object = [
    { value: 'Design' },
    { value: 'Marketing' },
    { value: 'Admin' },
    { value: 'Sales' }
  ];

  displayedColumns: string[] = [
    'firstName',
    'department',
    'email',
    'phone',
    'role'
  ];
  @ViewChild(MatSort)
  sort: MatSort;
  addMember: FormGroup;
  emailPattern: any = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  phonePattern: any = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
  showModal: boolean = false;

  checked: boolean = false;
  color: string = 'primary';

  @Input()
  data: any;
  dataSource: any;

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

  public updateEmployees() {
    this.onlineCount = 0;
    this.employees = [];
    for (const prop in this.initEmployees) {
      if (this.initEmployees[prop].projectID == this.data.id)
        this.employees.push(this.initEmployees[prop]);

      // console.log(this.initEmployees[prop].firstName);
    }

    for (const prop in this.employees) {
      if (this.employees[prop].onlineStat == 1) this.onlineCount++;
    }
    // console.log(this.employees);
    this.dataSource = new MatTableDataSource(this.employees);
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.projectName = this.data.name;

    this.updateEmployees();
  }

  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
    // console.log(this.data);
    //Filter employees based on project id
    this.projectName = this.data.name;
    this.updateEmployees();
  }

  onSearch(event: any) {
    // console.log(event.target.value);
    if (event.target.value == '') {
      this.updateEmployees();
      return;
    }
    let temp = this.employees;
    this.employees = [];
    for (const prop in temp) {
      if (
        temp[prop].firstName
          .toUpperCase()
          .includes(event.target.value.toUpperCase())
      )
        this.employees.push(temp[prop]);
      // console.log(temp[prop].firstName);
    }
    // console.log(this.employees);
    this.dataSource = new MatTableDataSource(this.employees);
    this.dataSource.sort = this.sort;
  }

  displayModal() {
    //Display the modal of form to add a new employee
    this.showModal = true;
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
}
