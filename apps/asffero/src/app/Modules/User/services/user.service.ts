import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../Common/Services/http.service';
import { User } from '../Modles/User.model';

@Injectable({ providedIn: 'root' })
export class ServiceService {
  constructor(private httpService: HttpService) {}

  getUsers(): Observable<User[]> {
    return this.httpService.get(`/api/user`);
  }

  getUser(id: number) {
    this.httpService.get('/api/user' + id);
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
