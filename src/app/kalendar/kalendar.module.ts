import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KalendarComponent } from './kalendar.component';
import { ScheduleAllModule } from '@syncfusion/ej2-angular-schedule';



@NgModule({
  declarations: [KalendarComponent],
  imports: [
    CommonModule,
    ScheduleAllModule
  ],
  exports: [
    KalendarComponent
  ],
})
export class KalendarModule { }
