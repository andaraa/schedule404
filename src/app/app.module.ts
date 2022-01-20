import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RaportComponent } from './raport/raport.component';
import { LoginComponent } from './login/login.component';
import { NilaiComponent } from './nilai/nilai.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalendarComponent } from './home/sidebar/calendar/calendar.component';
import { ProfilComponent } from './profil/profil.component';
import { AppComponent } from './app.component';
import { ScheduleAllModule } from '@syncfusion/ej2-angular-schedule';
import { KalendarModule } from './kalendar/kalendar.module';
// import {
//   DayService,
//   MonthAgendaService,
//   MonthService,
//   RecurrenceEditorModule,
//   ScheduleModule,
//   WeekService,
//   WorkWeekService,
// } from '@syncfusion/ej2-angular-schedule';
// import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [
    AppComponent,
    RaportComponent,
    LoginComponent,
    NilaiComponent,
    ForgotpwComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleAllModule,
    KalendarModule,
    // RecurrenceEditorModule,
    // FontAwesomeModule,
    // ScheduleModule,
    // ButtonModule,
  ],
  providers: [
    // DayService,
    // WeekService,
    // WorkWeekService,
    // MonthService,
    // MonthAgendaService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
