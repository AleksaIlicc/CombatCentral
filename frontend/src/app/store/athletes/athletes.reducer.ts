import { createReducer, on } from '@ngrx/store';

import * as AthletesActions from './athletes.actions';
import { AthletesState } from './athletes.state';

const initialState: AthletesState = {
  athletes: [],
};

export const athletesReducer = createReducer(
  initialState,
  on(AthletesActions.getAthletes, state => state),
  on(AthletesActions.getAthletesSuccess, (state, { athletes }) => ({
    ...state,
    athletes,
  }))
);
