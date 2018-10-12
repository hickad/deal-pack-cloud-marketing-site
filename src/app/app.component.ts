import { Component } from '@angular/core';


enum Constants {
  GET_STARTED_TODAY = 'GET_STARTED_TODAY';
}


@Component({
  selector: 'abc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Deal Pack Cloud';
}
