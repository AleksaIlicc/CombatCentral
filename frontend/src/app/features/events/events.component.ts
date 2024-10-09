import { Component } from '@angular/core';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  events: any = [];

  constructor(private readonly eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService.getEvents().subscribe(events => {
      this.events = events;
      console.log(this.events);
    });
  }
}
