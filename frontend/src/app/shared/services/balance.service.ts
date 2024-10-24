import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  constructor() {}

  getBalance(): number | string {
    if (Math.random() < 0.2) {
      return '********';
    }

    return Math.floor(Math.random() * 1000001);
  }
}
