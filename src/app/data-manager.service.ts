import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BridgeId, Bridge } from './bridge';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getBridges(): Observable<BridgeId[]> {
    const url = `${this.apiUrl}/bridges`
    return this.http.get<BridgeId[]>(url);
  }

  getBridge(id: string): Observable<Bridge> {
    const url = `${this.apiUrl}/bridges/${id}`
    return this.http.get<Bridge>(url)
  }
}
