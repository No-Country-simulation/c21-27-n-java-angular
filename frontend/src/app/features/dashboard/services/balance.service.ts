import { catchError, throwError } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.development';
import { AccountResponse } from '../types/account.type';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  private _account: string | null;
  private _jwt: string | null;

  constructor(private _http: HttpClient) {
    this._account = localStorage.getItem('accountNames');
    this._jwt = localStorage.getItem('jwt');
  }

  get() {
    if (!this._jwt || !this._account) {
      return throwError(() => new Error('Missing account or JWT token'));
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._jwt}`,
    });

    return this._http.get<AccountResponse>(
      `${environment.baseUrl}/accounts/${this._account}`,
      {
        headers,
      }
    );
  }
}
