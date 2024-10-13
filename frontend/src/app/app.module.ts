import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { athletesReducer } from './store/athletes/athletes.reducer';
import { AppState } from './store/app.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    StoreModule.forRoot<AppState>({
      athletes: athletesReducer,
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
