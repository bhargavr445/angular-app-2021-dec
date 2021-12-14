import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'css-app';

  constructor() {
    this.getAllData(1, 'bh', true, ['a'],[1,2], {name: 'ram', id: 123});
  }

  ngOnInit() {

  }

  getAllData = (a: number, b: string, c: boolean, d: string[], e: number[], f: {name: string, id: number}) => {
    console.log(a,b,c,d,e,f);
  }

}
