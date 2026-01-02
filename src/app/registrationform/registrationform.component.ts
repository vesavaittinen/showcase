import { Component } from '@angular/core';
import {ChangeDetectionStrategy, model} from '@angular/core';


import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Person } from '../Models/person';

@Component({
  selector: 'app-registrationform',
  standalone: true,
  imports: [FormsModule, MatCheckboxModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule],
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css', '../../styles.css'],
})
export class RegistrationformComponent {
  checkBox = false;
  person1 = new Person();
  onSubmit(submittedForm: any) {
    for (let [key, value] of Object.entries(submittedForm)) {
      console.log(`${key}: ${value}`);
    }
  }
}
