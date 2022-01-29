import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { User } from "../models/users.model";

@Injectable({
    providedIn: 'root'
})
export class UserService{

    constructor( private https: HttpClient){ }

    getUsers(): Observable<User[]>{
        return this.https.get<User[]>('https://jsonplaceholder.typicode.com/users');
    }
}
