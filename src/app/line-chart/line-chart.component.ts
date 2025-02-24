import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  @Input() lineConfig: { 
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    color: string;
    lineWidth: number;
  } = {
    x1: 10,
    y1: 10,
    x2: 100,
    y2: 100,
    color: 'red',
    lineWidth: 2
  };

  ngOnInit() {
    this.updateChart();
  }

  ngOnChanges() {
    this.updateChart();
  }

  updateChart() {
    this.chartOptions = {
      chart: {
        type: 'line',
        backgroundColor: 'transparent',
        height: 400,
        width: 600
      },
      title: { text: 'Custom Line Chart' },
      xAxis: { min: 0, max: 200 },
      yAxis: { min: 0, max: 200 },
      series: [{
        type: 'line',
        data: [
          [this.lineConfig.x1, this.lineConfig.y1],
          [this.lineConfig.x2, this.lineConfig.y2]
        ],
        color: this.lineConfig.color,
        lineWidth: this.lineConfig.lineWidth
      }]
    };
  }
}
