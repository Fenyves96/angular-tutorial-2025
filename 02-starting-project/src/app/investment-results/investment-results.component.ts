import { InvestmentService } from './../investment.service';
import { Component, inject, computed } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  //results = computed(() => this.investmentService.resultData());
  results = this.investmentService.resultData.asReadonly();
}
