import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  public login(loginObj: any): void {
    this.loadingSubject.next(true);
    this.http
      .post<Response>('https://oinkbank.onrender.com/api/auth/login', loginObj)
      .subscribe({
        next: (res) => {
          localStorage.setItem('jwt', res.jwt);
          this.loadingSubject.next(false);
          this.router.navigate(['dashboard']);
        },
        error: (err) => {
          alert(err.error || err.message || err.response.message);
          this.loadingSubject.next(false);
        },
      });
  }

  public isLoading(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }
}

interface Response {
  accountNames: string;
  jwt: string;
}
