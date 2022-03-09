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

  constructor(private userService: ServiceService) {
    console.log('am instantiated');
  }

  ngOnInit() {
    this.fetchAllUsers();
  }

  emitEventToEditUser(user: User) {
    this.EditEventsSubject.next(user);
  }
  fetchAllUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.userList = data;
    });
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
