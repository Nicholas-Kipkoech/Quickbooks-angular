import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillsService {
  private apiUrl = 'http://localhost:3002/bills/fetch';

  constructor(private http: HttpClient) {}
  getBills(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
