import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title: string = 'Training';
  name: string = 'Bhargav';
  trainingHours: number =0;

  student: any = {
    name: 'Bhargav R G',
    email: 'bhargavr445@gmail.com'
  };

  constructor() {
  };

  ngOnInit() {
    this.getAllStudents();
  };

  getAllStudents() {
    let { name, email } = this.student;
    // console.log(name);
    // console.log(email);
    ({ name } = this.student);
    console.log(name);
  }

  courseType(tutorialType: string, duration: number) {
    this.title = tutorialType;
    this.trainingHours = duration;

  }
  

}
