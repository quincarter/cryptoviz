import { Component, OnInit } from '@angular/core';
import {
  GridsterConfig,
  GridsterItem,
  GridType,
  DisplayGrid,
  GridsterItemComponentInterface
} from 'angular-gridster2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options: GridsterConfig;
  dashboard: GridsterItem[];
  unitHeight: number;

  constructor() {}

  ngOnInit() {
    this.options = {
      gridType: GridType.ScrollVertical,
      displayGrid: DisplayGrid.OnDragAndResize,
      itemResizeCallback: this.itemResize.bind(this),
      pushItems: true,
      swap: false,
      fixedRowHeight: 120,
      minCols: 12,
      maxCols: 12,
      minRows: 5,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboard = [];
  }

  addChart() {
    this.dashboard.push({ cols: 3, rows: 3, y: 0, x: 0 });
  }

  itemResize(
    item: GridsterItem,
    itemComponent: GridsterItemComponentInterface
  ) {
    if (itemComponent.gridster.curRowHeight > 1) {
      this.unitHeight = itemComponent.gridster.curRowHeight;
    }
    itemComponent.gridster.curRowHeight +=
      (item.cols * 100 - item.rows) / 10000;
  }
}
