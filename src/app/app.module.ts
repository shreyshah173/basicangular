import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyledTextComponent } from './styled-text/styled-text.component';
// import { LineChartComponent } from './line-chart/line-chart.component';
import { LineComponent } from './line/line.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { AirQualityIndexComponent } from './air-quality-index/air-quality-index.component';


@NgModule({
  declarations: [
    AppComponent,
    StyledTextComponent,
    // LineChartComponent,
    LineComponent,
    HighchartsComponent,
    AirQualityIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
