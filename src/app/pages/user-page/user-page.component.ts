import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private userService:UserService) { }

  newUser;
  userList;

  ngOnInit() {
    this.userList = this.userService.getUsers();
  }

  addUser = (name) => {
    if (!_.isEmpty(name)) {
      this.userList.push({ name });
    }
    this.newUser = '';
  }
}
