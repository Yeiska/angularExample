import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { catchError, map, Observable, of, throwError as observableThrowError } from "rxjs";

import { User } from "../models/user.model";
import { Users } from "../models/users.model";


@Injectable({
    providedIn: 'root'
})
export class UserService{

    constructor( private https: HttpClient){ }

    getUsers(): Observable<Users[]>{
        return this.https.get<Users[]>('https://jsonplaceholder.typicode.com/users');
    }

    postUser(user: User): Observable<User>{
        return this.https.post<User>('https://jsonplaceholder.typicode.com/posts', user, {'headers': {'Content-Type': 'text/plain'}}).pipe(
			map((response: User) => response),
			catchError((error) => observableThrowError(error))
		);
    }
}

export class MockUserService extends UserService{
    override getUsers(): Observable<Users[]>{
        return of([MockUserDefault])
    }
}

const MockUserDefault: Users =  {
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
