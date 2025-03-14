import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  textConfig = {
    message: 'This is the topic',
    size: 20,  // Base size that will scale with screen width
    fontColor: 'blue',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    positionX: 40, // % of screen width
    positionY: 1  // % of screen height
  };
  lineConfig = {
    x: '50vw',         // X-coordinate (Centered)
    y: '20vh',         // Y-coordinate
    //marginTop:'20vh',// Extra margin from top
    length: '10vw',    // Length
    height: '65vh',    // Thickness
    width: '0.1vw',    // Width
    rotation: '0deg',  // Rotation
    color: 'grey',     // Color
    scaleFactor: 1     // Scaling factor
  };
  temperatureConfig = {
    temperature: 25.2,  // Temperature value
    x: '25vw',         // X position (responsive)
    y: '75vh',          // Y position (responsive)
    magFac: 1.5,         // Magnification factor
    width: '15vw',     // Width of the component
    height: '5vw',     // Height of the component
    iconSize: '3vw'    // Size of the thermostat icon
  }; 
  humidityConfig = {
    humidity: 65,      // Humidity value
    x: '60vw',        // X position (responsive)
    y: '75vh',        // Y position (responsive)
    magFac: 1.5,      // Magnification factor
    width: '14vw',    // Width of the component
    height: '5vw',    // Height of the component
    iconSize: '3vw' // Size of the water drop icon
  };  
  imageConfig = {
    src: 'assets/download.png', // Path to image
    x: '20vw',      // X position (responsive)
    y: '15vh',      // Y position (responsive)
    magFac: 1.5,    // Magnification factor
    rotation: '45deg' // Rotation angle
  };
}
