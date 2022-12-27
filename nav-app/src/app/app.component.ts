import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nav-app';
  classActive = 'active';
  location = '/';

  ngOnInit() {
    console.log('init')
    console.log(location.pathname)
    this.location = location.pathname
  }
}
