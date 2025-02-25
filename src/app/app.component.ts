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
    positionX: '150px',     // X-coordinate
    positionY: '250px'      // Y-coordinate
  };
  lineConfig = {
    x: '200px',         // X-coordinate
    y: '100px',         // Y-coordinate
    length: '100px',    // Length of the line
    height: '1px',      // Thickess of the line
    width: '100px',     // Width of the line
    rotation: '90deg',  // Rotation angle
    color: 'grey'       // Line color
  };
  
}
