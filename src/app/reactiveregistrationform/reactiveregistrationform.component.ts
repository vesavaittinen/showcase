import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AbstractControl, PatternValidator, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactiveregistrationform',
  standalone: true,
  imports: [ NgIf, CommonModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule ],
  templateUrl: './reactiveregistrationform.component.html',
  styleUrl: './reactiveregistrationform.component.css'
})
export class ReactiveregistrationformComponent {
  profileForm: FormGroup;
  constructor() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-ZÀ-ȕ \-]*$')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-ZÀ-ȕ \-]*$')]),
      personid: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9A-Z \-]*$')]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6), Validators.pattern('^[@a-zA-Z \.]*$')]),
      userName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^[0-9a-zA-ZÀ-ȕ \-]*$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^[0-9a-zA-ZÀ-ȕ \-]*$')]),
      confpassw: new FormControl('', [Validators.required, Validators.minLength(8)]),
      checkb: new FormControl(false, [Validators.requiredTrue])
    },{ validators: this.passwordCheckValidator });
  }
passwordCheckValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  let password = control.get('password');
  let confirmpassword = control.get('confpassw');
  if (!password || !confirmpassword) {
    return null;
  }
  if (confirmpassword.errors && !confirmpassword.errors['passwordCheck']) {
    return null;
  }
  if (password.value !== confirmpassword.value) {
    confirmpassword.setErrors({ passwordCheck: true });
  } else {
    confirmpassword.setErrors(null);
  }
  return null;
};

  get firstName() {
    return this.profileForm.get('firstName');
  }
  get lastName() {
    return this.profileForm.get('lastName');
  }
  get personid() {
    return this.profileForm.get('personid');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get userName() {
    return this.profileForm.get('userName');
  }
  get password() {
    return this.profileForm.get('password');
  }
  get confpassw() {
    return this.profileForm.get('confpassw');
  }
  get checkb() {
    return this.profileForm.get('checkb');
  }
onSubmit() {
  console.log(
    'Firstname: ' + this.profileForm.value.firstName + '\n' +
    'Lastname: ' + this.profileForm.value.lastName + '\n' +
    'person Id: ' + this.profileForm.value.personid + '\n' +
    'Email: ' + this.profileForm.value.email + '\n' +
    'Username: ' + this.profileForm.value.userName + '\n'
  );
  //this.profileForm.reset();
}

}
