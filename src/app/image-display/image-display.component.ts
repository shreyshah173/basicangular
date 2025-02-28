import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements AfterViewInit {
  @Input() config!: {
    src: string;    // Image source
    x: string;      // X position (responsive)
    y: string;      // Y position (responsive)
    magFac: number; // Magnification factor
    rotation: string; // Rotation in degrees
  };

  @ViewChild('imageElement') imageElement!: ElementRef<HTMLImageElement>;
  aspectRatio = 1; // Default aspect ratio

  ngAfterViewInit() {
    const img = this.imageElement.nativeElement;
    img.onload = () => {
      this.aspectRatio = img.naturalWidth / img.naturalHeight; // Get original aspect ratio
    };
  }

  getStyles() {
    const baseWidth = 10; // Base width in vw (adjustable)
    const baseHeight = baseWidth / this.aspectRatio; // Maintain aspect ratio

    return {
      'position': 'absolute',
      'left': this.config.x,
      'top': this.config.y,
      'width': `calc(${baseWidth}vw * ${this.config.magFac})`,  
      'height': `calc(${baseHeight}vw * ${this.config.magFac})`, 
      'transform': `rotate(${this.config.rotation})`, 
      'object-fit': 'contain'
    };
  }
}
