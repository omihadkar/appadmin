import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../entities/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string , password: string):Observable<boolean>{
    
    return this.http.post<{token: string}>('/api/auth',{username: username,password: password})
    .pipe(
      map(result =>{
      localStorage.setItem('access_token',result.token);
      return true;
    }))
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  logout()
  {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean{
    return (localStorage.getItem('access_token')!=null); 
  }
}
