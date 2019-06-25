import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../_models/user';

// Simple subject to push new users to.
@Injectable({
  providedIn: 'root'
})
export class SelectedUsersService {
  private users = new Subject<User[]>();

  constructor() { }

  getUsers(): Subject<User[]> {
    return this.users;
  }

  setUsers(users: User[]) {
    this.users.next(users);
  }
}
