import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {
  // Accept a single object containing all line properties
  @Input() lineConfig: { 
    x: string;
    y: string;
    length: string;
    height: string;
    width: string;
    rotation: string;
    color: string;
  } = {
    x: '100px',
    y: '100px',
    length: '200px',
    height: '2px',
    width: '200px',
    rotation: '0deg',
    color: 'black'
  };

  // Function returning styles dynamically
  getStyles() {
    return {
      'position': 'absolute',
      'left': this.lineConfig.x,
      'top': this.lineConfig.y,
      'width': this.lineConfig.width,
      'height': this.lineConfig.height,
      'background-color': this.lineConfig.color,
      'transform': `rotate(${this.lineConfig.rotation})`
    };
  }
}
