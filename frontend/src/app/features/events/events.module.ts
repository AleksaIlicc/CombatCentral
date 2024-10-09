import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { EventsRoutingModule } from './events-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EventsService } from './services/events.service';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    NavbarComponent,
    HttpClientModule,
  ],
  providers: [EventsService],
})
export class EventsModule {}