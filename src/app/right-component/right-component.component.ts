import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-right-component',
  templateUrl: './right-component.component.html',
  styleUrls: ['./right-component.component.css']
})
export class RightComponentComponent implements OnInit {
  /*******************
   Variable Declarations
  *******************/

  //Store the initial list of employees to start with
  public initEmployees = [
    {
      firstName: 'Dean',
      lastName: 'Jones',
      email: 'dean.jones@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Sr. Mangager',
      department: 'Design',
      onlineStat: 0,
      projectID: 2,
      profImg: 'assets/profilePic4.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Emily',
      lastName: 'Clarke',
      email: 'emily.clarke@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Design',
      onlineStat: 0,
      projectID: 0,
      profImg: 'assets/profilePic4.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Gary',
      lastName: 'Kristen',
      email: 'gary.k@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Engineer',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 0,
      profImg: 'assets/profilePic4.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Hamilton',
      lastName: 'John',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 3,
      profImg: 'assets/profilePic4.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Dean',
      lastName: 'Jones',
      email: 'dean.jones@gmail.com',
      phone: '+1 245 6824 234',
      role: 'Sr. Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 3,
      profImg: 'assets/profilePic4.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Jake',
      lastName: 'Peralta',
      email: 'jake.peralta@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 4,
      profImg: 'assets/profilePic4.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Amy',
      lastName: 'Santiago',
      email: 'amy.amyy@gmail.com',
      phone: '+1 245 9531 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 1,
      projectID: 4,
      profImg: 'assets/profilePic4.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Dean',
      lastName: 'Jones',
      email: 'dean.jones@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Sr. Mangager',
      department: 'Design',
      onlineStat: 0,
      projectID: 2,
      profImg: 'assets/profilePic4.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Hamilton',
      lastName: 'John',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 3,
      profImg: 'assets/profilePic4.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Dean',
      lastName: 'Jones',
      email: 'dean.jones@gmail.com',
      phone: '+1 245 6824 234',
      role: 'Sr. Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 1,
      profImg: 'assets/profilePic4.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Jake',
      lastName: 'Peralta',
      email: 'jake.peralta@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 1,
      profImg: 'assets/profilePic4.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Amy',
      lastName: 'Santiago',
      email: 'amy.amyy@gmail.com',
      phone: '+1 245 9531 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 1,
      projectID: 1,
      profImg: 'assets/profilePic4.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Dean',
      lastName: 'Jones',
      email: 'dean.jones@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Sr. Mangager',
      department: 'Design',
      onlineStat: 0,
      projectID: 1,
      profImg: 'assets/profilePic4.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Emily',
      lastName: 'Clarke',
      email: 'emily.clarke@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Design',
      onlineStat: 0,
      projectID: 0,
      profImg: 'assets/profilePic2.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Gary',
      lastName: 'Kristen',
      email: 'gary.k@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Engineer',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 0,
      profImg: 'assets/profilePic2.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Hamilton',
      lastName: 'John',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 3,
      profImg: 'assets/profilePic2.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Dean',
      lastName: 'Jones',
      email: 'dean.jones@gmail.com',
      phone: '+1 245 6824 234',
      role: 'Sr. Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 3,
      profImg: 'assets/profilePic2.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Gary',
      lastName: 'Kristen',
      email: 'gary.k@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Engineer',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 1,
      profImg: 'assets/profilePic2.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Hamilton',
      lastName: 'John',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 1,
      profImg: 'assets/profilePic2.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Dean',
      lastName: 'Jones',
      email: 'dean.jones@gmail.com',
      phone: '+1 245 6824 234',
      role: 'Sr. Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 1,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Jake',
      lastName: 'Peralta',
      email: 'jake.peralta@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 4,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Amy',
      lastName: 'Santiago',
      email: 'amy.amyy@gmail.com',
      phone: '+1 245 9531 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 1,
      projectID: 4,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Jenny',
      lastName: 'Mosby',
      email: 'jjenyy@gmail.com',
      phone: '+1 741 2456 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 1,
      projectID: 5,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Charles',
      lastName: 'Boyle',
      email: 'c.boyle@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Engineer',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 0,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Hamilton',
      lastName: 'John',
      email: 'john.hamil@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Sr. Mangager',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 0,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 1,
      projectID: 0,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 1,
      profImg: 'assets/profilePic2.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 1,
      projectID: 1,
      profImg: 'assets/profilePic2.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 2,
      profImg: 'assets/profilePic2.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 2,
      profImg: 'assets/profilePic2.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Jake',
      lastName: 'Peralta',
      email: 'jake.peralta@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 0,
      profImg: 'assets/profilePic2.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Amy',
      lastName: 'Santiago',
      email: 'amy.amyy@gmail.com',
      phone: '+1 245 9531 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 1,
      projectID: 0,
      profImg: 'assets/profilePic2.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Jake',
      lastName: 'Peralta',
      email: 'jake.peralta@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 0,
      profImg: 'assets/profilePic2.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Amy',
      lastName: 'Santiago',
      email: 'amy.amyy@gmail.com',
      phone: '+1 245 9531 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 0,
      projectID: 0,
      profImg: 'assets/profilePic2.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Jake',
      lastName: 'Peralta',
      email: 'jake.peralta@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Marketing',
      onlineStat: 0,
      projectID: 0,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Amy',
      lastName: 'Santiago',
      email: 'amy.amyy@gmail.com',
      phone: '+1 245 9531 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 0,
      projectID: 0,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Jake',
      lastName: 'Peralta',
      email: 'jake.peralta@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Marketing',
      onlineStat: 0,
      projectID: 0,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Amy',
      lastName: 'Santiago',
      email: 'amy.amyy@gmail.com',
      phone: '+1 245 9531 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 0,
      projectID: 4,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Jake',
      lastName: 'Peralta',
      email: 'jake.peralta@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 6,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Amy',
      lastName: 'Santiago',
      email: 'amy.amyy@gmail.com',
      phone: '+1 245 9531 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 0,
      projectID: 7,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Hamilton',
      lastName: 'John',
      email: 'john.hamil@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Sr. Mangager',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 7,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 1,
      projectID: 7,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 8,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 1,
      projectID: 8,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 9,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 10,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Jake',
      lastName: 'Peralta',
      email: 'jake.peralta@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 11,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Amy',
      lastName: 'Santiago',
      email: 'amy.amyy@gmail.com',
      phone: '+1 245 9531 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 1,
      projectID: 12,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Jake',
      lastName: 'Peralta',
      email: 'jake.peralta@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 13,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Ted',
      lastName: 'Mosby',
      email: 'abc@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Mangager',
      department: 'Admin',
      onlineStat: 1,
      projectID: 10,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Jake',
      lastName: 'Peralta',
      email: 'jake.peralta@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 11,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Amy',
      lastName: 'Santiago',
      email: 'amy.amyy@gmail.com',
      phone: '+1 245 9531 234',
      role: 'Mangager',
      department: 'Sales',
      onlineStat: 1,
      projectID: 12,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    },
    {
      firstName: 'Jake',
      lastName: 'Peralta',
      email: 'jake.peralta@gmail.com',
      phone: '+1 245 2456 234',
      role: 'Tech Lead',
      department: 'Marketing',
      onlineStat: 1,
      projectID: 13,
      profImg: 'assets/profilePic3.jpg',
      quote: 'Lorem Ipsum'
    }
  ];
  public employees = [];
  projectName: string = '';
  onlineCount: number = 0;

  // For dropdown menu
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
    'role',
    'more'
  ];
  @ViewChild(MatSort)
  sort: MatSort;
  addMember: FormGroup;
  emailPattern: any = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  showModal: boolean = false;
  checked: boolean = false;
  @Input()
  data: any;
  dataSource: any;

  /*******************
   Methods
  *******************/

  constructor(private fb: FormBuilder) {
    //Form contents with validations
    this.addMember = this.fb.group({
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
      phone: [null, null],
      email: [
        null,
        Validators.compose([Validators.pattern(this.emailPattern)])
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

  ngOnChanges() {
    //When the project selected is changed in left panel
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
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  memberRegister(data) {
    console.log('\n\nForm Data: ', data);
    if (this.addMember.invalid) {
      return;
    }
    let newMember = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.emailId,
      phone: data.phone,
      role: data.role,
      department: data.department,
      onlineStat: 1,
      projectID: this.data.id,
      profImg: 'assets/profilePic.jpg',
      quote: 'Lorem Ipsum'
    };

    this.initEmployees.push(newMember);
    this.updateEmployees();
    this.showModal = false;
    this.addMember.reset();
  }

  public onlineChange() {
    //Trigger member display on onlineStat value
    this.checked = !this.checked;
    if (this.checked == true) {
      this.onlineCount = 0;
      this.employees = [];
      for (const prop in this.initEmployees) {
        if (
          this.initEmployees[prop].projectID == this.data.id &&
          this.initEmployees[prop].onlineStat == 1
        )
          this.employees.push(this.initEmployees[prop]);
      }

      for (const prop in this.employees) {
        if (this.employees[prop].onlineStat == 1) this.onlineCount++;
      }
      this.dataSource = new MatTableDataSource(this.employees);
      this.dataSource.sort = this.sort;
    } else this.updateEmployees();
  }
}
