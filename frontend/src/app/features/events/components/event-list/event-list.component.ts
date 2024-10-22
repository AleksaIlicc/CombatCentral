import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../../store/app.state';
import { selectEventsList } from '../../../../store/events/events.selectors';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
})
export class EventListComponent {
  events$: Observable<any> = new Observable();

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit() {
    this.events$ = this.store.select(selectEventsList);
  }
}
