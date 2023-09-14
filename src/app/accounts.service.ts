import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private apiUrl = 'http://localhost:3002/accounts/fetch';

  constructor(private http: HttpClient) {}
  getAccounts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
