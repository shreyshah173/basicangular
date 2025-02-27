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
    marginTop?: string; // New property for margin
  };

  responsiveStyles: any = {};

  ngOnChanges() {
    this.updateStyles();
  }

  updateStyles() {
    const scale = this.lineConfig.scaleFactor || 1;
    const marginTop = this.lineConfig.marginTop || '0vh';

    this.responsiveStyles = {
      'position': 'absolute',
      'left': this.lineConfig.x,
      'top': `calc(${this.lineConfig.y} + ${marginTop})`, // Add margin to top
      'width': `calc(${this.lineConfig.width} * ${scale})`,
      'height': `calc(${this.lineConfig.height} * ${scale})`,
      'background-color': this.lineConfig.color,
      'transform': `rotate(${this.lineConfig.rotation})`,
      'transform-origin': 'center'
    };
  }
}
