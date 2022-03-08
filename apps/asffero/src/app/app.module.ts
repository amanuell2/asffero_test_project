import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserModule } from './Modules/User/user.module';
@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    UserModule,
    HttpClientModule,
    NzButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
