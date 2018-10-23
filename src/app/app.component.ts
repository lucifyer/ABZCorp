import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public toChild: number = 0;

  passId(projectID: any) {
    this.toChild = projectID;
  }

  public projects = [
    {
      id: 0,
      name: 'Project A'
    },
    {
      id: 1,
      name: 'Project B'
    },
    {
      id: 2,
      name: 'Project C'
    },
    {
      id: 3,
      name: 'Project D'
    },
    {
      id: 4,
      name: 'Project E'
    },
    {
      id: 5,
      name: 'Project F'
    },
    {
      id: 6,
      name: 'Project G'
    },
    {
      id: 7,
      name: 'Project H'
    },
    {
      id: 8,
      name: 'Project I'
    },
    {
      id: 9,
      name: 'Project J'
    },
    {
      id: 10,
      name: 'Project K'
    },
    {
      id: 11,
      name: 'Project L'
    },
    {
      id: 12,
      name: 'Project M'
    },
    {
      id: 13,
      name: 'Project N'
    }
  ];
}
