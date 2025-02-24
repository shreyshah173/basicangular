import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-styled-text',
  templateUrl: './styled-text.component.html',
  styleUrls: ['./styled-text.component.css']
})
export class StyledTextComponent {
  // Accept a single object containing all properties
  @Input() textConfig: { 
    message: string;
    fontSize: string;
    fontColor: string;
    fontFamily: string;
    fontWeight: string;
    positionX: string;
    positionY: string;
  } = {
    message: 'DefaultText',
    fontSize: '24px',
    fontColor: '#ff5733',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    positionX: '100px',
    positionY: '200px'
  };

  // Function returning styles dynamically
  getStyles() {
    return {
      'font-size': this.textConfig.fontSize,
      'color': this.textConfig.fontColor,
      'font-family': this.textConfig.fontFamily,
      'font-weight': this.textConfig.fontWeight,
      'position': 'absolute',
      'left': this.textConfig.positionX,
      'top': this.textConfig.positionY
    };
  }
}
