import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransferBody } from '../types/transfer-confirm.type';
import { environment } from 'environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private _token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZXYiLCJpYXQiOjE3MzAxNDE4NTQsImV4cCI6MTczMDE3Nzg1NH0.boZPZvAAfDjVMEwWDQEwHfICEONsezg9yN4fcMEJfcs';

  constructor(private _http: HttpClient) {}

  sendTransfer(body: TransferBody) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._token}`,
    });

    return this._http.post(environment.apiUrl + '/transfer', body, { headers });
  }
}
