import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { getEvents } from '../../store/events/events.actions';
import { AppState } from '../../store/app.state';
import { selectEventsList } from '../../store/events/events.selectors';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  events: any = [];

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getEvents());
    this.events = this.store.select(selectEventsList);
  }
}
