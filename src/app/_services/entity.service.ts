import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export abstract class EntityService<T> {
  url: string;

  constructor(protected http: HttpClient, protected relativePath: string) {
    this.url = `${environment.apiUrl}/${relativePath}`;
  }

  /** GET entities from the server */
  getAll(params?): Observable<T[]> {
    return this.http.get<T[]>(this.url, { params });
  }
}
