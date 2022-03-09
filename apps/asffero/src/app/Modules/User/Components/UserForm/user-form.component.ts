import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { User } from '../../Modles/User.model';
@Component({
  selector: 'angular-tailwind-nx-user-form-selector',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  validateForm: FormGroup;
  @Output() newUserAddEvent = new EventEmitter<User>();
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
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.newUserAddEvent.emit(this.validateForm.value);
      this.validateForm.reset();
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

  ngOnInit() {}
}
