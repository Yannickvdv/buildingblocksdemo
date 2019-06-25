import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/_models/user';
import { UserParams, UserService } from 'src/app/_services/user.service';
import { SelectedUsersService } from 'src/app/_services/selected-users.service';

@Component({
  selector: 'app-search-fields',
  templateUrl: './search-fields.component.html',
  styleUrls: ['./search-fields.component.scss']
})
export class SearchFieldsComponent implements OnInit {
  searchFieldsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private selectedUsersService: SelectedUsersService,
  ) {}

  // convenience getter for easy access to form fields
  get f(): FormGroup['controls'] {
    return this.searchFieldsForm.controls;
  }

  ngOnInit() {
    this.searchFieldsForm = this.formBuilder.group({
      firstName: [''],
      gender: [''],
      startDate: [''],
      endDate: [''],
      minBalance: [''],
      maxBalance: ['']
    });
  }

  onSubmit(event) {
    // Stop here if form is invalid, currently it is always valid
    if (this.searchFieldsForm.invalid) {
      return;
    }

    // Could be cleaner, don't have the time right now
    const params: UserParams = {};
    if (this.f.firstName.value) { params['name.first'] = this.f.firstName.value; }
    if (this.f.gender.value) { params.gender = this.f.gender.value; }
    if (this.f.maxBalance.value) { params.balance_lte = this.f.maxBalance.value; }
    if (this.f.minBalance.value) { params.balance_gte = this.f.minBalance.value; }
    if (this.f.endDate.value) { params.registered_lte = new Date(this.f.endDate.value).getTime(); }
    if (this.f.startDate.value) { params.registered_gte = new Date(this.f.startDate.value).getTime(); }

    this.userService
      .getAll(params)
      .subscribe(users => this.selectedUsersService.setUsers(users));
  }
}
