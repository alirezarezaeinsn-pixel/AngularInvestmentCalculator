import {Component, Input, input} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {InvestmentService} from "../investment.service";
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  constructor(public investmentService: InvestmentService){};

  get resultsData() {
    return this.investmentService.resultsData;
  }

  /*results = input<
    {
      year: number,
      interest: number,
      valueEndOfYear: number,
      annualInvestment: number,
      totalInterest: number,
      totalAmountInvested: number,
    }[]>()*/
  /*@Input() results?:{
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,
  }[];*/

}
