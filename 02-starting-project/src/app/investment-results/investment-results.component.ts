import { InvestmentService } from './../investment.service';
import { Component, inject, computed } from '@angular/core';
import { InvestmentResult } from '../investment-result.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  //results = computed(() => this.investmentService.resultData());
  results = this.investmentService.resultData.asReadonly();
}
