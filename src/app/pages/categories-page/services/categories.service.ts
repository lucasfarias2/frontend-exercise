import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<string[]> {
    const parser = new DOMParser;
    return this.http.get<{ data: string[] }>('/assets/items.json')
    .pipe(map(result => result.data.map(encoded => parser.parseFromString(encoded, 'text/html').body.textContent)));
  }


}
