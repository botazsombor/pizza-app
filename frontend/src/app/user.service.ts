import { Injectable } from '@angular/core';
import { User } from "./user";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Authorization': '', // user/password
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private userUrl: string = 'http://localhost:8080/users';
  private currentUser: User = null;
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
  loginUser(key: String, msgBody: Object){
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Basic ' + key);
    
    this.http.get<User[]>(`${this.userUrl}`, httpOptions).toPromise().then(
      (res)=>{
        this.currentUser = res[0];
      });
  }
  logoutUser(){
    httpOptions.headers = httpOptions.headers.set('Authorization', '');
    this.currentUser = null;
  }
  getCurrentUser(){
    return this.currentUser;
  }
  register(msgBody: Object){
    
    this.http.post<User[]>(`${this.userUrl}`,msgBody, httpOptions).toPromise().then(
      (res)=>{
        console.log(res);
      });
  }

}