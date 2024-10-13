import { createReducer, on } from '@ngrx/store';

import { getAthletes } from './athletes.actions';
import { AthletesState } from './athletes.state';

const initialState: AthletesState = {
  athletes: [],
};

export const athletesReducer = createReducer(
  initialState,
  on(getAthletes, state => state)
);
