import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
  }
}
