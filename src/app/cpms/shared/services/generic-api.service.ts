import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericapiService {
  private apiUrl = 'http://localhost:3000';

  http = inject(HttpClient)

  //Chiamata API generica
  getData(route : string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/${route}`);
  }

}
