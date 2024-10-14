import { createAction, props } from '@ngrx/store';

export const getAthletes = createAction('[Athletes] Get Athletes');
export const getAthletesSuccess = createAction(
  '[Athletes] Get Athletes Success',
  props<{ athletes: any }>()
);
