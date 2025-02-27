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
  styleUrls: ['./last-updated-time.component.css']
})
export class LastUpdatedTimeComponent implements OnInit {
  @Input() lastUpdated!: string; // Timestamp in ISO format
  @Input() magFac: number = 1;   // Scale factor for size
  @Input() x: number = 100;      // X position
  @Input() y: number = 100;      // Y position
  @Input() textColor: string = '#333'; // Text color
  
  lastUpdatedText: string = '';

  ngOnInit() {
    this.updateLastUpdatedText();
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
}
