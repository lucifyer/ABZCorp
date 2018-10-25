import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public toChild = {
    id: 0,
    name: 'Project A'
  };

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
  selectedItem: any = this.projects[0];
  passId(newValue: any) {
    this.toChild = newValue;
    this.selectedItem = newValue; // don't forget to update the model here
  }
}
