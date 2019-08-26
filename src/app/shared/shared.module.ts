import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetModule } from './widget/widget.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, WidgetModule],
  exports: [WidgetModule]
})
export class SharedModule {}
