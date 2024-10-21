import { createAction, props } from '@ngrx/store';

export const getEvents = createAction('[Events] Get Events');
export const getEventsSuccess = createAction(
  '[Events] Get Events Success',
  props<{ events: any }>()
);
