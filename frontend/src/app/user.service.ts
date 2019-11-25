import { Injectable } from '@angular/core';
import { User } from "./user";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Basic dXNlcjpwYXNzd29yZA==', // user/password
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private userUrl: string = 'http://localhost:8080/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Promise<User[]> {
    return this.http.get<User[]>(`${this.userUrl}`, httpOptions).toPromise();
  }

  getUser(id: number): Promise<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`, httpOptions).toPromise();
  }

  createUser(user: User): Promise<User> {
    return this.http.post<User>(`${this.userUrl}`, User, httpOptions).toPromise();
  }

  updateUser(user: User): Promise<User> {
    return this.http.put<User>(`${this.userUrl}/${user.id}`, user, httpOptions).toPromise();
  }

  deleteUser(id): Promise<User> {
    return this.http.delete<User>(`${this.userUrl}/${id}`, httpOptions).toPromise();
  }
}