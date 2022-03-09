import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from '../../Modles/User.model';
@Component({
  selector: 'angular-tailwind-nx-user-form-selector',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  validateForm: FormGroup;
  isUpdating = false;
  userId = '';
  private eventsSubscription: Subscription;
  @Input() editUserEvents: Observable<User>;
  @Output() newUserAddEvent = new EventEmitter<User>();
  @Output() editUserEvent = new EventEmitter<User>();

  constructor(private fb: FormBuilder, private i18n: NzI18nService) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['', [Validators.email, Validators.required]],
      surname: ['', [Validators.required, Validators.maxLength(60)]],
      dateOfBirth: ['', [Validators.required]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
    this.i18n.setLocale(en_US);
    this.eventsSubscription = new Subscription();
    this.editUserEvents = new Observable();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log(this.isUpdating);
      if (this.isUpdating)
        this.editUserEvent.emit({
          ...this.validateForm.value,
          id: this.userId,
        });
      if (!this.isUpdating) this.newUserAddEvent.emit(this.validateForm.value);
      this.validateForm.reset();
      this.isUpdating = false;
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  ngOnInit() {
    this.eventsSubscription = this.editUserEvents.subscribe((data: User) => {
      this.isUpdating = true;
      this.validateForm.controls['name'].setValue(data?.name);
      this.validateForm.controls['surname'].setValue(data.surname);
      this.validateForm.controls['email'].setValue(data.email);
      this.validateForm.controls['phone'].setValue(data.phone);
      this.validateForm.controls['dateOfBirth'].setValue(data.dateOfBirth);
      this.userId = data.id;
    });
  }
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }
}
