import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

export const selectAthletes = (state: AppState) => state.athletes;

export const selectAthletesList = createSelector(
  selectAthletes,
  state => state.athletes
);
