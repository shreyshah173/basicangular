import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  textConfig = {
    message: 'Hello, Angular!',
    fontSize: '1em',
    fontColor: 'blue',
    fontFamily: 'Courier New, monospace',
    fontWeight: 'bold',
    positionX: '150px',     // X-coordinate
    positionY: '250px'      // Y-coordinate
  };
  lineConfig = {
    x: '32%',          // X-coordinate (Centered)
    y: '30vh',         // Y-coordinate
    marginTop: '20vh', // Extra margin from top
    length: '10vw',    // Length
    height: '0.2vh',   // Thickness
    width: '35vw',     // Width
    rotation: '90deg', // Rotation
    color: 'grey',     // Color
    scaleFactor: 1     // Scaling factor
  };
  temperatureConfig = {
    temperature: 25.2,  // Temperature value
    x: '25vw',         // X position (responsive)
    y: '60vh',          // Y position (responsive)
    magFac: 1.5,         // Magnification factor
    width: '15vw',     // Width of the component
    height: '5vw',     // Height of the component
    iconSize: '3vw'    // Size of the thermostat icon
  }; 
}
