import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { OrderDetailsService } from '../services/order-details.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-agrishow',
  standalone: true,
  imports: [ MatCardModule, MatButtonModule, MatCheckboxModule, MatInputModule, FormsModule, MatFormFieldModule, NgIf ],
  templateUrl: './agrishow.component.html',
  styleUrl: './agrishow.component.css'
})
export class AgrishowComponent {
  formProps: any;
  constructor(private orderService: OrderDetailsService) {
    this.formProps = this.orderService.ticketObject;
  }
  onSubmit(submittedForm: any) {
    for (let [key, value] of Object.entries(submittedForm)) {
      console.log(`${key}: ${value}`);
    }
  }
  sumTotal() {
    let value: number;
  }
}

