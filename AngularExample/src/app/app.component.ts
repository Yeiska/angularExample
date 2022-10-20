import { Component, OnInit } from '@angular/core';

import { User } from './models/user.model';
import { Users } from './models/users.model';
import{ UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular Example';
  users!: Users[];
  user: User = {
    title: "",
    body: "",
  };

  constructor( 
    private _users : UserService,
    private _user: UserService) {}

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this._users.getUsers().subscribe((response: Users[]) => {
      this.users = response;
    },
    (error)=> console.error(error))
  }

  submit() {
    console.log(this.user);
    this._user.postUser(this.user).subscribe((response: User) =>{
      this.user = response;
      console.log(this.user);
      this.getUsers();
    })
  }
}
