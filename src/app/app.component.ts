import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textConfig = {
    message: 'Hello, Angular!',
    fontSize: '30px',
    fontColor: 'blue',
    fontFamily: 'Courier New, monospace',
    fontWeight: 'bold',
    positionX: '150px',
    positionY: '250px'
  };
}
