import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {User} from '../entities/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<User[]>('/api/users');
}

getById(id: number) {
    return this.http.get('/api/users/${id}');
}

register(user: User) {
    return this.http.post('/api/users/register', user);

    return this.http.post<{token: string}>('/api/admin/register',{username: username,password: password, firstName: firstName, lastName:lastName})
    .pipe(
      map(result =>{
      //localStorage.setItem('access_token',result.token);
      return true;
    }))
}

update(user: User) {
    return this.http.put('/api/users/${user.id}', user);
}

delete(id: number) {
    return this.http.delete('/api/users/${id}');
}
}
