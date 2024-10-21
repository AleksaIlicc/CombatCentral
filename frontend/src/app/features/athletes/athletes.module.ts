import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AthletesComponent } from './athletes.component';
import { AthleteComponent } from './components/athlete/athlete.component';
import { AthleteListComponent } from './components/athlete-list/athlete-list.component';
import { AthletesRoutingModule } from './athletes-routing.module';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { AthletesService } from './services/athletes.service';
import { athletesReducer } from '../../store/athletes/athletes.reducer';
import { AthletesEffects } from '../../store/athletes/athletes.effects';

@NgModule({
  declarations: [AthletesComponent, AthleteComponent, AthleteListComponent],
  imports: [
    CommonModule,
    AthletesRoutingModule,
    StoreModule.forFeature('athletes', athletesReducer),
    EffectsModule.forFeature([AthletesEffects]),
    NavbarComponent,
  ],
  providers: [AthletesService],
})
export class AthletesModule {}
