import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransferBody } from '../types/transfer-confirm.type';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private _token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZXYiLCJpYXQiOjE3MzAwODc0NDUsImV4cCI6MTczMDEyMzQ0NX0.LVWuk5IPszhE3GQtN9eFdVBKIx7_OT6eJZ01AuFOLMo';

  constructor(private _http: HttpClient) {}

  sendTransfer(body: TransferBody) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._token}`,
    });

    return this._http.post('localhost:8080/transfer', body, { headers });
  }
}
