import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

export const selectEvents = (state: AppState) => state.events;

export const selectEventsList = createSelector(
  selectEvents,
  state => state.events
);
