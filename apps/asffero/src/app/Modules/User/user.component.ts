import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { User } from './Modles/User.model';
import { ServiceService } from './services/user.service';
@Component({
  selector: 'angular-tailwind-nx-user-selector',
  templateUrl: 'user.component.html',
})
export class UserComponent implements OnInit {
  EditEventsSubject: Subject<User> = new Subject<User>();
  userList: User[] = [];
  totalUsers = 0;
  page = 1;
  limit = 10;
  constructor(private userService: ServiceService) {}

  ngOnInit() {
    this.fetchAllUsers();
  }

  emitEventToEditUser(user: User) {
    this.EditEventsSubject.next(user);
  }
  fetchAllUsers(search = '') {
    this.userService
      .getUsers({ page: this.page, limit: this.limit, search: search })
      .subscribe((data) => {
        this.userList = data?.items;
        this.totalUsers = data?.total;
      });
  }
  onPageIndexChange(pageIndex: number) {
    this.page = pageIndex;
    this.fetchAllUsers();
  }
  searchUser(searchValue: string) {
    console.log(searchValue);
    this.fetchAllUsers(searchValue);
  }
  fetchUser(id: number) {
    this.userService.getUser(id);
  }

  addUser(user: User) {
    this.userService.createUser(user).subscribe((data) => {
      this.fetchAllUsers();
    });
  }

  updateUser(user: User) {
    this.userService.updateUser(user).subscribe((data) => {
      this.fetchAllUsers();
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((data) => {
      this.fetchAllUsers();
    });
  }
}
