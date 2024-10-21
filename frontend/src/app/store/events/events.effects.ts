import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';

import { EventsService } from '../../features/events/services/events.service';
import * as EventsActions from './events.actions';

@Injectable()
export class EventsEffects {
  constructor(
    private actions$: Actions,
    private eventsService: EventsService
  ) {}

  getEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.getEvents),
      switchMap(() => {
        return this.eventsService.getEvents().pipe(
          map(events => {
            console.log(events);
            return EventsActions.getEventsSuccess({ events });
          }),
          catchError(() => of(EventsActions.getEventsSuccess({ events: [] })))
        );
      })
    )
  );
}
