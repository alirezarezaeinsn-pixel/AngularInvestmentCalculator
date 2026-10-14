import {Component, EventEmitter, Output, output, signal} from '@angular/core';
import {FormBuilder, FormsModule} from "@angular/forms";
import {InvestmentInputModel} from "../investment-input.model";
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  //@Output() calculateInvestmentResults = new EventEmitter<InvestmentInputModel>();
  calculateInvestmentResults = output<InvestmentInputModel>();

  intialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  constructor(private investmentService: InvestmentService) {}

    onSubmit() {
      console.log("onSubmit called");
      this.investmentService.calculateInvestmentResults({
        initialInvestment: +this.intialInvestment(),
        duration : +this.duration(),
        annualInvestment: +this.annualInvestment(),
        expectedReturn: +this.expectedReturn()});

      this.intialInvestment.set('0');
      this.annualInvestment.set('0');
      this.expectedReturn.set('5');
      this.duration.set('10');
    }

}
