// import { Component, Input, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-last-updated-time',
//   templateUrl: './last-updated-time.component.html',
//   styleUrls: ['./last-updated-time.component.css']
// })
// export class LastUpdatedTimeComponent implements OnInit {
//   @Input() lastUpdated: string = '03:16'; // Default input (will be overridden)
//   lastUpdatedText: string = '';

//   ngOnInit() {
//     this.updateLastUpdatedText();
//     setInterval(() => {
//       this.updateLastUpdatedText();
//     }, 1000); // Update every second
//   }

//   updateLastUpdatedText(timestamp:number) {
//     const lastUpdatedDate = new Date(timestamp); // Convert timestamp to Date
//     const now = new Date();
    
//     const timeDiff = now.getTime() - lastUpdatedDate.getTime(); // Difference in milliseconds
  
//     let diffSeconds = Math.floor(timeDiff / 1000); // Convert to seconds
//     let diffMinutes = Math.floor(diffSeconds / 60); // Convert to minutes
//     let diffHours = Math.floor(diffMinutes / 60); // Convert to hours
//     let diffDays = Math.floor(diffHours / 24); // Convert to days
  
//     if (diffDays > 0) {
//       this.lastUpdatedText = `Last updated: ${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
//     } else if (diffHours > 0) {
//       this.lastUpdatedText = `Last updated: ${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
//     } else if (diffMinutes > 0) {
//       this.lastUpdatedText = `Last updated: ${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
//     } else {
//       this.lastUpdatedText = `Last updated: ${diffSeconds} second${diffSeconds > 1 ? 's' : ''} ago`;
//     }
  
//   }


// }

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-updated-time',
  templateUrl: './last-updated-time.component.html',
  styleUrls: [] // No need for an external CSS file
})
export class LastUpdatedTimeComponent implements OnInit {
  @Input() lastUpdated!: string; // Timestamp in ISO format
  @Input() textColor: string = '#000'; // Default text color
  @Input() textScale: number = 1; // Scale factor for text size
  @Input() magFac : number = 1;
  lastUpdatedText: string = '';
  textStyles: { [key: string]: string } = {}; // Dynamic styles

  ngOnInit() {
    this.updateLastUpdatedText();
    this.setTextStyles();
    setInterval(() => this.updateLastUpdatedText(), 60000); // Update every 1 min
  }

  updateLastUpdatedText() {
    const lastUpdatedTimestamp = new Date(this.lastUpdated).getTime();
    const now = new Date().getTime();
    const timeDiff = now - lastUpdatedTimestamp;

    const diffSeconds = Math.floor(timeDiff / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) {
      this.lastUpdatedText = `Last updated: ${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else if (diffHours > 0) {
      this.lastUpdatedText = `Last updated: ${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else if (diffMinutes > 0) {
      this.lastUpdatedText = `Last updated: ${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    } else {
      this.lastUpdatedText = `Last updated: ${diffSeconds} second${diffSeconds > 1 ? 's' : ''} ago`;
    }
  }

  setTextStyles() {
    this.textStyles = {
      'position': 'absolute',
      'left': '50vw', // Center horizontally
      'top': '90vh', // Center vertically
      'transform': 'translate(-50%, -50%)', // Ensure exact centering
      'font-size': `${this.textScale * 2}vw`, // Scale based on viewport width
      'color': this.textColor,
      'white-space': 'nowrap', // Prevent text from wrapping
      'font-weight': 'bold',
      'text-align': 'center',
    };
  }
}
