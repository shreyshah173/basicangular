import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-humidity-display',
  templateUrl: './humidity-display.component.html',
  styleUrls: ['./humidity-display.component.css']
})

export class HumidityDisplayComponent {
  @Input() config!: {
    humidity: number;
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
      'gap': `${this.config.magFac * 0.5}vw`, // Responsive gap
      'font-size': `${this.config.magFac * 1.5}vw`, // Scale text
      'width': this.config.width, // Dynamic width
      'height': this.config.height, // Dynamic height
      'transform': `scale(${this.config.magFac})`, // Scaling based on magFac
    };
  }

  getIconStyles() {
    return {
      'font-size': this.config.iconSize, // Dynamic icon size
      'width': this.config.iconSize,
      'height': this.config.iconSize,
    };
  }
}
