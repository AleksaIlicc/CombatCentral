import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../store/app.state';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrl: './athlete-list.component.scss',
})
export class AthleteListComponent {
  athletes: any = [];

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit() {
    // this.athletesService.getAthletes().subscribe(athletes => {
    //   this.athletes = athletes;
    // });

    this.athletes = this.store.select('athletes');
  }
}
