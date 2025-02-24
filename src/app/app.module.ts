import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyledTextComponent } from './styled-text/styled-text.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LineComponent } from './line/line.component';
// import { HighchartsChartModule } from 'angular-highcharts'; // ✅ Import Highcharts module


@NgModule({
  declarations: [
    AppComponent,
    StyledTextComponent,
    LineChartComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HighchartsChartModule // ✅ Add HighchartsChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
