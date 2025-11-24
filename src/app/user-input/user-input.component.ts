import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculateInvestmentResults = new EventEmitter<{initialInvestment: number,
    duration: number,
    annualInvestment: number,
    expectedReturn: number}>();

  intialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

    onSubmit() {
      console.log("onSubmit called");
      this.calculateInvestmentResults.emit({initialInvestment: +this.intialInvestment,
        duration : +this.duration,
        annualInvestment: +this.annualInvestment,
        expectedReturn: +this.expectedReturn});
    }
}
