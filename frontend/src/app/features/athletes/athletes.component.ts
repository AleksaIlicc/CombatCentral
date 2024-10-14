import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.state';
import { getAthletes } from '../../store/athletes/athletes.actions';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrl: './athletes.component.scss',
})
export class AthletesComponent {
  constructor(private readonly store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getAthletes());
  }
}
