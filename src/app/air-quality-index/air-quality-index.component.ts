import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HeatmapModule from 'highcharts/modules/heatmap';

// 🔹 Initialize Heatmap Module
if (typeof HeatmapModule === 'function') {
  HeatmapModule(Highcharts); // ✅ Correct way to initialize
}

@Component({
  selector: 'app-air-quality-index',
  templateUrl: './air-quality-index.component.html',
  styleUrls: ['./air-quality-index.component.css']
})
export class AirQualityIndexComponent {
  Highcharts = Highcharts;
  magFac = 1;
  magWid = 1;
  magHei = 1;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'heatmap',
      marginTop: 20,
      marginBottom: 40,
      plotBorderWidth: 1,
      height: 100 * this.magFac // ✅ Multiply by magFac
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Good', 'Satisfactory', 'Moderate', 'Poor', 'Very Poor', 'Severe'],
      tickWidth: 0
    },
    yAxis: {
      categories: [''],
      title: {},
      labels: { enabled: false }
    },
    colorAxis: {
      min: 0,
      max: 500,
      stops: [
        [0.0, '#00B050'],  // Green - Good
        [0.2, '#B3C100'],  // Yellow-Green - Satisfactory
        [0.4, '#FFD966'],  // Yellow - Moderate
        [0.6, '#F4A460'],  // Orange - Poor
        [0.8, '#E06666'],  // Red-Orange - Very Poor
        [1.0, '#CC0000']   // Red - Severe
      ]
    },
    legend: {
      enabled: false
    },
    series: [{
      type: 'heatmap',
      borderWidth: 1,
      data: [
        [0, 0, 50],   // Good
        [1, 0, 100],  // Satisfactory
        [2, 0, 200],  // Moderate
        [3, 0, 300],  // Poor
        [4, 0, 400],  // Very Poor
        [5, 0, 500]   // Severe
      ],
      dataLabels: {
        enabled: true,
        color: '#FFFFFF',
        style: {
          fontWeight: 'bold'
        },
        format: '{point.value}'
      }
    }]
  };
}
