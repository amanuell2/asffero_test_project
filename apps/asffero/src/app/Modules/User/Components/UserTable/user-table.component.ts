import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../Modles/User.model';

@Component({
  selector: 'angular-tailwind-nx-user-table-selector',
  templateUrl: 'user-table.component.html',
})
export class UserTableComponent {
  @Input() users: User[] = [];
  @Output() deleteUserEvent = new EventEmitter<string>();
  @Output() editUserEvent = new EventEmitter<User>();
  constructor() {}

  editUser(user: User) {
    this.editUserEvent.emit(user);
  }
  deleteUser(id: string) {
    this.deleteUserEvent.emit(id);
  }
}
