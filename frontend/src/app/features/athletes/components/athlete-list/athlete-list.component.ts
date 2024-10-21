import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { AppState } from '../../../../store/app.state';
import { selectAthletesList } from '../../../../store/athletes/athletes.selectors';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrl: './athlete-list.component.scss',
})
export class AthleteListComponent {
  athletes$: Observable<any> = of([]);

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit() {
    this.athletes$ = this.store.select(selectAthletesList);
  }
}
