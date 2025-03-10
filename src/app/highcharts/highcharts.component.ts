import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent {
  Highcharts = Highcharts; // Required for highcharts-angular
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line' // 📊 You can change this to 'bar', 'pie', etc.
    },
    title: {
      text: 'Monthly Sales Data'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    },
    yAxis: {
      title: {
        text: 'Sales (in USD)'
      }
    },
    series: [
      {
        name: 'Sales',
        type: 'line',
        data: [5000, 7000, 8000, 12000, 15000, 18000,15000,13000,12000,40000,30000,20000] // Your data points
      }
    ]
  };
}
