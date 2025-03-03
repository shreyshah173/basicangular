import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-box',
  templateUrl: './data-box.component.html',
  styleUrls: ['./data-box.component.css']
})
export class DataBoxComponent {
  @Input() symbol!: string;    // Symbol (e.g., CO, NO2)
  @Input() unit!: string;      // Measurement unit (e.g., mg/m³, ppb)
  @Input() value!: number;     // Numeric value
  @Input() maxValue!: number;  // Max value for progress bar
  @Input() color!: string;     // Color for value text and progress bar

  getProgressBarWidth(): string {
    return `${(this.value / this.maxValue) * 100}%`;
  }
}
