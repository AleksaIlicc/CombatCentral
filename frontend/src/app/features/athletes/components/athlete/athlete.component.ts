import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrl: './athlete.component.scss',
})
export class AthleteComponent {
  @Input() athlete: any;
}
