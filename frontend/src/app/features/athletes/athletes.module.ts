import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthletesComponent } from './athletes.component';
import { AthleteComponent } from './components/athlete/athlete.component';
import { AthleteListComponent } from './components/athlete-list/athlete-list.component';
import { AthletesRoutingModule } from './athletes-routing.module';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { AthletesService } from './services/athletes.service';

@NgModule({
  declarations: [AthletesComponent, AthleteComponent, AthleteListComponent],
  imports: [CommonModule, AthletesRoutingModule, NavbarComponent],
  providers: [AthletesService],
})
export class AthletesModule {}
