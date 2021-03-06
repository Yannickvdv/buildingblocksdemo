import { Injectable } from '@angular/core';
import { EntityService } from './entity.service';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';

// Some query filters. Could be made more dynamic.
// lte = Lesser Than or Equal to
// gte = Greater Than or Equal to
export class UserParams {
  'name.first'?: string;
  gender?: User['gender'];
  balance_lte?: number;
  balance_gte?: number;
  registered_lte?: number;
  registered_gte?: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService extends EntityService<User> {
  constructor(http: HttpClient) {
    super(http, 'users');
  }

  getAllUsers(params?: UserParams) {
    return this.getAll(params);
  }
}
