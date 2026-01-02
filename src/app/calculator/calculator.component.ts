import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatGridListModule, MatButtonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  calculatorButtons: Array<string> = ['+', '-', '/', '*', '7', '8', '9', 'C', '4', '5', '6', '=', '1', '2', '3', '0'];
  calculationString: string = '0'; // display a zero at the beginning
  calculationResult: string = '';
  operatorFlag: Boolean = false; // used to check whether an operator is stored into calculationString
  addToCalculation(buttonValue: string) {
    if(buttonValue == '=') {
      if (this.operatorFlag == true) { // if the calculation ends at an operator, the summing is not accepted
        buttonValue = ''
      }
      else {
        let tempResult = this.calculationString;
        tempResult = eval?.(tempResult);
        this.calculationString = tempResult;
      }
    }
    else if (buttonValue == 'C') {
      this.calculationString = '0'; // calculation resets to a zero
    }
    else if (buttonValue == '+' || buttonValue == '-' || buttonValue == '/' || buttonValue == '*') {
      if (this.calculationString == '0') { // if someone tries to begin calculating with an operator (duh)
        buttonValue = '';
      }
      else if (this.operatorFlag == true) {
        buttonValue = ''; // if concurrent operators are detected, the newest operator is discarded
      }
      else {
        this.operatorFlag = true; // operator detected, so the flag is set
        this.calculationString += buttonValue;
      }
    }
    else if (this.calculationString == '0') { // if it's the initial zero
        this.calculationString = buttonValue; // then overwrite it
        this.operatorFlag = false;
      }
    else {
        this.calculationString += buttonValue;
        this.operatorFlag = false;
      }
    }
}
