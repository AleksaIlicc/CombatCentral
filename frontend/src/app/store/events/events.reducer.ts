import { createReducer, on } from '@ngrx/store';
import { getEvents, getEventsSuccess } from './events.actions';

const initialState = {
  events: [],
};

export const eventsReducer = createReducer(
  initialState,
  on(getEvents, state => state),
  on(getEventsSuccess, (state, { events }) => ({
    ...state,
    events,
  }))
);
