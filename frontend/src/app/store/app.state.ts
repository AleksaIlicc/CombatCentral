import { AthletesState } from './athletes/athletes.state';
import { EventsState } from './events/events.state';

export interface AppState {
  athletes: AthletesState;
  events: EventsState;
}
