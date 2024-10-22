import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { getEvents } from '../../store/events/events.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  constructor(private readonly store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getEvents());
  }
}
