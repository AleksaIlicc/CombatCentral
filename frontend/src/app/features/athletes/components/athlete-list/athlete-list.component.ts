import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';

import { AppState } from '../../../../store/app.state';
import { AthletesState } from '../../../../store/athletes/athletes.state';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrl: './athlete-list.component.scss',
})
export class AthleteListComponent {
  athletes: Observable<any> = of([]);

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit() {
    // this.athletesService.getAthletes().subscribe(athletes => {
    //   this.athletes = athletes;
    // });

    this.athletes = this.store
      .select('athletes')
      .pipe(map((state: AthletesState) => state.athletes));
  }
}
