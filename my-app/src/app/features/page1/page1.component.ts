import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log('masuk page 1')
  }

  toMain(evt) {
    this.router.navigateByUrl('/my-app')
  }

}
