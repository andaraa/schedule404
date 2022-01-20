import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KalendarComponent } from './kalendar.component';
import { ScheduleAllModule } from '@syncfusion/ej2-angular-schedule';
import { FullCalendarModule } from '@fullcalendar/angular';

import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [KalendarComponent],
  imports: [
    CommonModule,
    ScheduleAllModule,
    FullCalendarModule
  ],
  exports: [
    KalendarComponent
  ],
})
export class KalendarModule { }
