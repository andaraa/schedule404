import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ScheduleAllModule,
  ScheduleModule,
} from '@syncfusion/ej2-angular-schedule';

import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  MonthAgendaService,
} from '@syncfusion/ej2-angular-schedule';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [],
  bootstrap: [],
  imports: [BrowserModule, ScheduleModule, ButtonModule, ScheduleAllModule],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    MonthAgendaService,
  ],
})
export class ScheduleComponentModule {}
