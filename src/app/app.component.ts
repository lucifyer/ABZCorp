import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*Initial project A to be sent to right component*/

  public toChild = {
    id: 0,
    name: 'Project A'
  };
  currentYear: number;

  /*JSON object of projects, can be moved to file and services can be used to fetch the file from server*/
  public projects = [
    {
      id: 0,
      name: 'Project A',
      image: 'assets/project.jpg'
    },
    {
      id: 1,
      name: 'Project B',
      image: 'assets/project.jpg'
    },
    {
      id: 2,
      name: 'Project C',
      image: 'assets/project.jpg'
    },
    {
      id: 3,
      name: 'Project D',
      image: 'assets/project.jpg'
    },
    {
      id: 4,
      name: 'Project E',
      image: 'assets/project.jpg'
    },
    {
      id: 5,
      name: 'Project F',
      image: 'assets/project.jpg'
    },
    {
      id: 6,
      name: 'Project G',
      image: 'assets/project.jpg'
    },
    {
      id: 7,
      name: 'Project H',
      image: 'assets/project.jpg'
    },
    {
      id: 8,
      name: 'Project I',
      image: 'assets/project.jpg'
    },
    {
      id: 9,
      name: 'Project J',
      image: 'assets/project.jpg'
    },
    {
      id: 10,
      name: 'Project K',
      image: 'assets/project.jpg'
    },
    {
      id: 11,
      name: 'Project L',
      image: 'assets/project.jpg'
    },
    {
      id: 12,
      name: 'Project M',
      image: 'assets/project.jpg'
    },
    {
      id: 13,
      name: 'Project N',
      image: 'assets/project.jpg'
    }
  ];

  //Store the current selected project
  selectedItem: any = this.projects[0];

  //Pass the new selected project to right component and update selected project
  passId(newValue: any) {
    this.toChild = newValue;
    this.selectedItem = newValue;
  }

  //Get current year for dynamic footer
  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
