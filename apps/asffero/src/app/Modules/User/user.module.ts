import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [UserComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    RouterModule.forRoot([
        { path: 'user', component: UserComponent },
    ]),
  ],
  exports:[UserComponent],
  providers: [],
})
export class UserModule {}