import { Component } from '@angular/core';

import { AthletesService } from '../../services/athletes.service';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrl: './athlete-list.component.scss',
})
export class AthleteListComponent {
  athletes: any = [];

  constructor(private readonly athletesService: AthletesService) {}

  ngOnInit() {
    this.athletesService.getAthletes().subscribe(athletes => {
      this.athletes = athletes;
    });
  }
}
