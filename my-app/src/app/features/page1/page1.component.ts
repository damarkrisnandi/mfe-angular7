import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('masuk page 1')
  }

}
