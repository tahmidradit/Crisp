import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  readonly cardBaseUrl = 'https://localhost:7101/api/card';

  constructor() { }
}
