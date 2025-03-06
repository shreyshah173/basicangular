import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnChanges {
  @Input() lineConfig!: {
    x: string;
    y: string;
    length: string;
    height: string;
    width: string;
    rotation: string;
    color: string;
    scaleFactor: number;
    marginTop?: string;
  };

  @Input() toScale: boolean = true; // New property to control scaling

  responsiveStyles: any = {};

  ngOnChanges() {
    this.updateStyles();
  }

  updateStyles() {
    const scale = this.lineConfig.scaleFactor || 1;
    const marginTop = this.lineConfig.marginTop || '0vh';

    console.log('screen width is: ', window.innerWidth);

    // Default values when toScale is false
    const defaultStyles = {
      height: '450px',
      width: '1.5px',
      left: '500px',
      top: '100px'
    };
    // console.log(this.lineConfig.marginTop);
    
    this.responsiveStyles = {
      position: 'relative',
      left: this.toScale ? this.lineConfig.x : defaultStyles.left,
      top: this.toScale ? `calc(${this.lineConfig.y} + ${marginTop})` : defaultStyles.top,
      width: this.toScale ? this.lineConfig.width : defaultStyles.width,
      height: this.toScale ? this.lineConfig.height : defaultStyles.height,
      'background-color': this.lineConfig.color,
      transform: `rotate(${this.lineConfig.rotation})`,
      'transform-origin': 'center'
    };
  }
}
