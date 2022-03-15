/**
 * SWEN 261
 * Services the user class of the beans store.
 * 
 * Contributors: Isaac Post
 */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersURL = 'http://localhost:8080/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  userExists(username: string): Observable<boolean> {
      /**
       * Checks to see if the information inputted by the user
       * exists in the user data.
       * 
       * FIX ME add backend. - > Fixed
       */
      const url = `${this.usersURL}/${username}`;
      return this.http.get<boolean>(url);
      //return USERS.some(user => (user.username === username));
  }

  createUser(username: string): Observable<User> {
      /**
       * Creates a new user by passing on the username
       * 
       * Input Arguments:
       * username -- The username of the new user
       */
       const url = `${this.usersURL}/${username}`;
       return this.http.post<User>(url, this.httpOptions);
  }

  getUser(username: string): Observable<User> {
    const url = `${this.usersURL}/${username}`;
    return this.http.get<User>(url);
  }
}
