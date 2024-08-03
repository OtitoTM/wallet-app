// wallet.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl = `${environment.apiBaseUrl}/wallets`;

  constructor(private http: HttpClient) {}

  getWallets(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Other CRUD operations can be implemented here
}
