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

  @Input() textColor: string = '#000'; // Default text color
  @Input() textScale: number = 1.5 // Scale factor for text size

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

    // this.dynamicStyles = {
    //   'font-size': `${(this.textConfig.size) * screenWidth/screenHeight}px`, // Scale font size
    //   'color': this.textConfig.fontColor,
    //   'font-family': this.textConfig.fontFamily,
    //   'font-weight': this.textConfig.fontWeight,
    //   'position': 'absolute',
    //   'left': `${this.textConfig.positionX }vw`, // Scale X position
    //   'top': `${this.textConfig.positionY }vh`  // Scale Y position
    // };
    this.dynamicStyles = {
      'position': 'absolute',
      'left': '50vw', // Center horizontally
      'top': '5vh', // Center vertically
      'transform': 'translate(-50%, -50%)', // Ensure exact centering
      'font-size': `${this.textScale * 2}vw`, // Scale based on viewport width
      'color': this.textColor,
      'white-space': 'nowrap', // Prevent text from wrapping
      'font-weight': 'bold',
      'text-align': 'center',
    }
  }
}
