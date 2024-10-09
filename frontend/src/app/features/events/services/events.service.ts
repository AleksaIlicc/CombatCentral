import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventsService {
  constructor(private httpClient: HttpClient) {}

  getEvents() {
    return this.httpClient.get('http://localhost:3000/events/find-all');
  }
}
