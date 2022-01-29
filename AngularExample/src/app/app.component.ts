import { Component, OnInit } from '@angular/core';

import { User } from './models/users.model';
import{ UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular Example';
  users!: User[];

  constructor( private _users : UserService) {}

  ngOnInit(): void {
    this._users.getUsers().subscribe((response: User[]) => {
      this.users = response;
    })
  }
}
