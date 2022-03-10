import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../Common/Services/http.service';
import { User } from '../Modles/User.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpService: HttpService) {}

  getUsers(data: any): Observable<any> {
    return this.httpService.get(`/api/user`, data);
  }

  getUser(id: number): Observable<User> {
    return this.httpService.get('/api/user' + id, null);
  }

  createUser(user: any): Observable<User> {
    return this.httpService.post('/api/user/', user);
  }

  updateUser(user: any): Observable<User> {
    return this.httpService.put('/api/user/' + user.id, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.httpService.delete('/api/user/' + id);
  }
}
