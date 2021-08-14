import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private httpClient: HttpClient) { }
  
  public getUsers():Observable<User[]>{
    let dataURL:string = "https://jsonplaceholder.typicode.com/users";
    return this.httpClient.get<User[]>(dataURL);
  }

}