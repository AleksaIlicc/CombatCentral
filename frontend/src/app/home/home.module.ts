import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, NavbarComponent],
})
export class HomeModule {}
