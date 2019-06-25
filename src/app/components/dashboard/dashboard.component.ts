import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';
import { SelectedUsersService } from 'src/app/_services/selected-users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService,
    private selectedUsersService: SelectedUsersService) {}

  ngOnInit() {
    // Once the dashboard is loaded, fill it with default users
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });

    // Listen to any changes in the selected users and apply them
    this.selectedUsersService.getUsers().subscribe(users => this.users = users);
  }
}
