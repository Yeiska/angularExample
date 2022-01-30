import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

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

export class MockUserService extends UserService{
    override getUsers(): Observable<User[]>{
        return of([MockUserDefault])
    }
}

const MockUserDefault: User =  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
