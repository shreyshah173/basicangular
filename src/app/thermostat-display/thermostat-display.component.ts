import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thermostat-display',
  templateUrl: './thermostat-display.component.html',
  styleUrls: ['./thermostat-display.component.css']
})
export class ThermostatDisplayComponent {
  @Input() config!: {
    temperature: number;
    x: string;
    y: string;
    magFac: number;
    width: string;
    height: string;
    iconSize: string;
  };

  getStyles() {
    return {
      'position': 'absolute',
      'left': this.config.x,
      'top': this.config.y,
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'gap': `${this.config.magFac * 0.5}vw`, // Responsive gap based on viewport width
      'font-size': `${this.config.magFac * 1.5}vw`, // Scale text size based on viewport
      'width': this.config.width, // Set width dynamically
      'height': this.config.height, // Set height dynamically
      'transform': `scale(${this.config.magFac})`, // Scale the whole component
    };
  }

  getIconStyles() {
    return {
      'font-size': this.config.iconSize, // Set icon size dynamically
      'width': this.config.iconSize, // Maintain proportional width
      'height': this.config.iconSize, // Maintain proportional height
    };
  }
}
