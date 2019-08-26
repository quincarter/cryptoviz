import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit, OnChanges {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      reflow: true
    },
    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
      text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    series: [
      {
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        type: 'line'
      },
      {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        type: 'line'
      },
      {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        type: 'line'
      },
      {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
        type: 'line'
      },
      {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
        type: 'line'
      }
    ]
  };

  @Input() unitHeight: number;
  @Input() item: GridsterItem;
  @Input() index: number;

  loaded: boolean;
  chart: Highcharts.Chart;

  constructor() {}

  ngOnInit() {
    this.loaded = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.loaded) {
      this.resizeChart();
    }
  }

  chartInstance(chart: Highcharts.Chart) {
    this.chart = chart;
    this.loaded = true;
  }

  resizeChart(): void {
    this.chartOptions.chart.height =
      this.item.rows * (this.unitHeight - 10) + (this.item.rows - 4) * 10;
    this.chartOptions.chart.width =
      this.item.cols * (this.unitHeight - 10) + (this.item.cols - 4) * 10;

    if (this.chart) {
      this.chart.setSize(
        this.chartOptions.chart.width,
        this.chartOptions.chart.height,
        false
      );
    }
  }
}
