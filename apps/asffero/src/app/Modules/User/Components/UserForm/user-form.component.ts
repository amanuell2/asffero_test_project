import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
@Component({
  selector: 'angular-tailwind-nx-user-form-selector',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private i18n: NzI18nService) {
    this.validateForm = this.fb.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.maxLength(60),
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
      surName: ['', [Validators.required, Validators.maxLength(60)]],
      dateOfBirth: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10),Validators.pattern('^[0-9]*$')]],
    });
    this.i18n.setLocale(en_US);
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
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
