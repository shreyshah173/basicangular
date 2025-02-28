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
import { LastUpdatedTimeComponent } from './last-updated-time/last-updated-time.component';
import { ThermostatDisplayComponent } from './thermostat-display/thermostat-display.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HumidityDisplayComponent } from './humidity-display/humidity-display.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { DataBoxComponent } from './data-box/data-box.component';


@NgModule({
  declarations: [
    AppComponent,
    StyledTextComponent,
    // LineChartComponent,
    LineComponent,
    HighchartsComponent,
    AirQualityIndexComponent,
    LastUpdatedTimeComponent,
    ThermostatDisplayComponent,
    HumidityDisplayComponent,
    ImageDisplayComponent,
    DataBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    MatIconModule,
    BrowserAnimationsModule, // Import Material Icons Module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
