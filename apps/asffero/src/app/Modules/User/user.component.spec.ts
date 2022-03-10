import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  it('should create the user component', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const userComponent = fixture.debugElement.componentInstance;
    expect(userComponent).toBeTruthy();
  });
});
