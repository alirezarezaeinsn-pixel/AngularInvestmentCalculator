import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentInputModel} from "../investment-input.model";

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

  @Output() calculateInvestmentResults = new EventEmitter<InvestmentInputModel>();

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
