import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsServie {
  uri = 'https://ig-api-fsn5far23a-de.a.run.app/';

  constructor(private http: HttpClient) {}

  getCards(): Observable<any> {
    return this.http.get(this.uri + 'posts').pipe();
  }
}
