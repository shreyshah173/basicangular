import { Component, Input, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-styled-text',
  templateUrl: './styled-text.component.html',
  styleUrls: ['./styled-text.component.css']
})
export class StyledTextComponent implements OnInit {
  @Input() textConfig!: { 
    message: string;
    size: number;  // This is the base input size (e.g., 50 for 50px)
    fontColor: string;
    fontFamily: string;
    fontWeight: string;
    positionX: number;  // X in percentage of screen width
    positionY: number;  // Y in percentage of screen height
  };

  dynamicStyles: any = {};

  ngOnInit() {
    this.updateStyles();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateStyles();
  }

  updateStyles() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    this.dynamicStyles = {
      'font-size': `${(this.textConfig.size) * screenWidth/screenHeight}px`, // Scale font size
      'color': this.textConfig.fontColor,
      'font-family': this.textConfig.fontFamily,
      'font-weight': this.textConfig.fontWeight,
      'position': 'absolute',
      'left': `${(this.textConfig.positionX / 100) * screenWidth}px`, // Scale X position
      'top': `${(this.textConfig.positionY / 100) * screenHeight}px`  // Scale Y position
    };
  }
}
