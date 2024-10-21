import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { EventsComponent } from './events.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventsService } from './services/events.service';
import { eventsReducer } from '../../store/events/events.reducer';
import { EventsEffects } from '../../store/events/events.effects';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    StoreModule.forFeature('events', eventsReducer),
    EffectsModule.forFeature([EventsEffects]),
    NavbarComponent,
  ],
  providers: [EventsService],
})
export class EventsModule {}
