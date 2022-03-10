import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from './user.service';

const dummyUserListResponse = {
  data: [
    {
      id: 1,
      name: 'Alanson',
      surname: 'Pourveer',
      email: 'apourveer0@tinypic.com',
      phone: '5798144367',
      dateOfBirth: '6/12/2021',
      timeStamp: '10/3/2021',
    },
    {
      id: 2,
      name: 'Ivar',
      surname: 'Spriggin',
      email: 'ispriggin1@google.ca',
      phone: '8431261881',
      dateOfBirth: '6/4/2021',
      timeStamp: '9/15/2021',
    },
    {
      id: 3,
      name: 'Hinze',
      surname: 'Asbery',
      email: 'hasbery2@networksolutions.com',
      phone: '3338425583',
      dateOfBirth: '4/7/2021',
      timeStamp: '3/20/2021',
    },
  ],
};

const dummyUserDetails = {
  data: {
    id: 1,
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
  },
};
describe('usersService', () => {
  let injector: TestBed;
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    injector = getTestBed();
    service = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);
  });

  //   afterEach(() => {
  //     httpMock.verify();
  //   });

  it('getUserList() should return data', () => {
    service
      .getUsers({ page: 1, limit: 10, search: 'hello' })
      .subscribe((res) => {
        expect(res).toEqual(dummyUserListResponse);
      });

    const req = httpMock.expectOne('https://localhost:3333/api/user');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserListResponse);
  });

  it('getUserDetails() should return trasnformed data', () => {
    service.getUser(1).subscribe((res) => {
      expect(res).toEqual(dummyUserDetails);
    });

    const req = httpMock.expectOne('https://reqres.in/api/users/1');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserDetails);
  });
});
