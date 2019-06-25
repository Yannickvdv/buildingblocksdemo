import { TestBed } from '@angular/core/testing';

import { SelectedUsersService } from './selected-users.service';

describe('SelectedUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedUsersService = TestBed.get(SelectedUsersService);
    expect(service).toBeTruthy();
  });
});
