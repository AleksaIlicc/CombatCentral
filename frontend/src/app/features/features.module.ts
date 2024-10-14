import { NgModule } from '@angular/core';

import { AthletesModule } from './athletes/athletes.module';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  imports: [AthletesModule, AuthModule, EventsModule, AdminModule],
})
export class FeaturesModule {}
