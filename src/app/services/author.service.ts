import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_URL } from '../models/const';
import { Author } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private http: HttpClient
  ) { }

  public getAuthors(filter: string): Observable<Author[]> {
    const url = SERVER_URL + `/authors?q=${filter}`;

    return this.http.get<Author[]>(url);
  }
}
