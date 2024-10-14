import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, switchMap } from 'rxjs';

import { AthletesService } from '../../features/athletes/services/athletes.service';
import * as AthletesActions from './athletes.actions';

@Injectable()
export class AthletesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly athletesService: AthletesService
  ) {}

  getAthletes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AthletesActions.getAthletes),
      switchMap(() =>
        from(
          this.athletesService
            .getAthletes()
            .pipe(
              map(athletes => AthletesActions.getAthletesSuccess({ athletes }))
            )
        )
      )
    )
  );
}
