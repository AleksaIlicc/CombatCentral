import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AthletesService {
  constructor(private httpClient: HttpClient) {}

  getAthletes() {
    return this.httpClient.get('http://localhost:3000/athletes/find-all');
  }
}
