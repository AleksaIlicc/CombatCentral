import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
})
export class EventComponent {
  @Input() event: { title: string; location: string; date: string; image: '' } =
    {
      title: '',
      location: '',
      date: '',
      image: '',
    };
}
