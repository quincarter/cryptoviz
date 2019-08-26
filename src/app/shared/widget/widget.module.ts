import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { WidgetComponent } from './widget.component';

@NgModule({
  declarations: [WidgetComponent],
  imports: [CommonModule, HighchartsChartModule],
  exports: [WidgetComponent]
})
export class WidgetModule {}
