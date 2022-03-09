import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserTableComponent } from './Components/UserTable/user-table.component';
import { UserFormComponent } from './Components/UserForm/user-form.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [UserComponent, UserTableComponent, UserFormComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzButtonModule,
    NzFormModule,
    NzDropDownModule,
    NzDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: 'user', component: UserComponent }]),
  ],
  exports: [UserComponent],
  providers: [],
})
export class UserModule {}
