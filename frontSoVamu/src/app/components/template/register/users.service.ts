import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../register/register.module';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = "http://localhost:3000/users"

  constructor(private http: HttpClient) {

  }

  list(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user)
  }

  readById(id: string): Observable<User> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<User>(url)
  }

  update(user: User): Observable<User> {
    const url = `${this.baseUrl}/${user.id}`
    return this.http.put<User>(url, user)
  }

  delete(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<User>(url)
  }
}