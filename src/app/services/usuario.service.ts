import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private URL = 'https://reqres.in/api'
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.URL}/users?per_page=6`)
      .pipe(
        map((resp: any) => resp.data))
  }
}
