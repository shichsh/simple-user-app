import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserService {

    constructor(private httpClient: HttpClient) {};

    public listUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>("http://localhost:8080/user/findAll");
    }

    public addUser(user: User): Observable<User> {
        return this.httpClient.post<User>("http://localhost:8080/user/add", user);
    }

    public updateUser(user: User): Observable<User> {
        return this.httpClient.put<User>("http://localhost:8080/user/update", user);
    }
}