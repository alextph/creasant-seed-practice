import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:Http) { }

  getUsers() {
    return this.http.get('http://localhost:8080/api/users').pipe(
      map(data => data.json())
    )
  }
}
