import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skeleton-ts-angular';
  url = 'http://dummyimage.com/699x890.png/cc0000/ffffff';
  des =  'piero pieropieropieropieropie\nropieropieropieropierop\nieropieroropieropieropieropieropro\npieropieropieropierop';
  ann = 1920;
  constructor() {    
  }
}
