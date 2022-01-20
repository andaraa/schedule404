import { Component, OnInit, ViewChild } from '@angular/core';
import {
  faEdit,
  faEraser,
  faIcons,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {
  CalendarOptions,
  DateSelectArg,
  EventApi,
  EventClickArg,
} from '@fullcalendar/angular';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import {
  EventSettingsModel,
  ScheduleComponent,
  View,
} from '@syncfusion/ej2-angular-schedule';
import { createEventId, INITIAL_EVENTS } from './event-utils';

@Component({
  selector: 'app-kalendar',
  templateUrl: './kalendar.component.html',
  styleUrls: ['./kalendar.component.css'],
})
export class KalendarComponent implements OnInit {
  // @ViewChild('scheduleObj')
  // public scheduleObj?: ScheduleComponent;
  // @ViewChild('addButton')
  // public addButton?: ButtonComponent;
  // public selectedDate: Date = new Date(2018, 1, 15);
  // public scheduleViews: View[] = ['Day', 'Week', 'WorkWeek', 'Month'];
  // public eventSettings: EventSettingsModel = {
  //   dataSource: [
  //     {
  //       Id: 1,
  //       Subject: 'Testing',
  //       StartTime: new Date(2018, 1, 11, 9, 0),
  //       EndTime: new Date(2018, 1, 11, 10, 0),
  //       IsAllDay: false,
  //     },
  //     {
  //       Id: 2,
  //       Subject: 'Vacation',
  //       StartTime: new Date(2018, 1, 13, 9, 0),
  //       EndTime: new Date(2018, 1, 13, 10, 0),
  //       IsAllDay: false,
  //     },
  //   ],
  // };

  public eventSchedule: any[] = [];

  constructor(){
    
  }
  
  calendarOptions!: CalendarOptions;

  ngOnInit(): void {
    //jadi data dari backend di push ke eventSchedule
    this.eventSchedule = [
      { title: 'event 1', date: '2022-01-27' },
      { title: 'event 2', date: '2022-01-30' },
    ];

    this.calendarOptions = {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
      },
      initialView: 'dayGridMonth',
      initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
      weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      events: this.eventSchedule,
      select: this.handleDateSelect.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this),
      /* you can update a remote database when these fire:
      eventAdd:
      eventChange:
      eventRemove:
      */
    };
    
  }

  // public onButtonClick(): void {
  //   let data: Object[] = [
  //     {
  //       Id: 3,
  //       Subject: 'Conference',
  //       StartTime: new Date(2018, 1, 12, 9, 0),
  //       EndTime: new Date(2018, 1, 12, 10, 0),
  //       IsAllDay: true,
  //     },
  //     {
  //       Id: 4,
  //       Subject: 'Meeting',
  //       StartTime: new Date(2018, 1, 15, 10, 0),
  //       EndTime: new Date(2018, 1, 15, 11, 30),
  //       IsAllDay: false,
  //     },
  //   ];
  //   this.scheduleObj?.addEvent(data);
  //   this.addButton?.element.setAttribute('disabled', 'true');
  // }

  calendarVisible = true;
  
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  // faSearch = faSearch;
  // faEdit = faEdit;
  // faEraser = faEraser;
  // faIcon = faIcons;
  // title = 'final-project';
}
