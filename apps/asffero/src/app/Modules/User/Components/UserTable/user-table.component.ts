import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  tap,
} from 'rxjs';
import { User } from '../../Modles/User.model';

@Component({
  selector: 'angular-tailwind-nx-user-table-selector',
  templateUrl: 'user-table.component.html',
})
export class UserTableComponent implements AfterViewInit {
  @Input() users: User[] = [];
  @Input() totalUsers = 0;
  @Output() deleteUserEvent = new EventEmitter<string>();
  @Output() editUserEvent = new EventEmitter<User>();
  @Output() pageIndexChangeEvent = new EventEmitter<number>();
  @Output() searchUserEvent = new EventEmitter<string>();
  @ViewChild('input', { static: true })
  input!: ElementRef;
  searchValue = '';
  visible = false;
  constructor() {}

  ngAfterViewInit() {
    // server-side search
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(300),
        distinctUntilChanged(),
        tap((text) => {
          this.searchUserEvent.emit(this.input.nativeElement.value);
        })
      )
      .subscribe();
  }
  editUser(user: User) {
    this.editUserEvent.emit(user);
  }
  deleteUser(id: string) {
    this.deleteUserEvent.emit(id);
  }

  onPageIndexChange(pageIndex: number) {
    this.pageIndexChangeEvent.emit(pageIndex);
  }

  onPageSizeChange(pageSize: number) {
    console.log(pageSize);
  }
}
