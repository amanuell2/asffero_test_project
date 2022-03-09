import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/asffero/src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get(url: string): any {
    return this.httpClient.get(`${environment.apiUrl}${url}`);
  }

  post(url: string, data: any): any {
    return this.httpClient.post(`${environment.apiUrl}${url}`, data);
  }

  put(url: string, data: any): any {
    return this.httpClient.patch(`${environment.apiUrl}${url}`, data);
  }

  delete(url: string): any {
    return this.httpClient.delete(`${environment.apiUrl}${url}`);
  }
}
