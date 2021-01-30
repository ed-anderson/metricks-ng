import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CalculatorFormService } from '../../services/calculator-form/calculator-form.service';
import { CalculatorResults } from '../../models/calculator-results';
import { CalculatorResultsViewModel } from '../../models/calculator-results.vm';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  providers: [CalculatorFormService],
})
export class CalculatorComponent implements OnInit {
  private readonly _results = new BehaviorSubject<CalculatorResultsViewModel[]>(
    null
  );
  results$ = this._results.asObservable();

  constructor() {}

  ngOnInit(): void {}

  calculatorResultsHandler(results: CalculatorResults): void {
    const resultsViewModels = this.mapToCalculatorViewModels(results);
    this._results.next(resultsViewModels);
  }

  private mapToCalculatorViewModels(
    results: CalculatorResults
  ): CalculatorResultsViewModel[] {
    return [
      {
        label: 'E-Factor',
        value: results.eFactor,
      },
      {
        label: 'Effective Mass Yield (EMY)',
        value: results.effectiveMassYield,
      },
      {
        label: 'Process Mass Intensity (PMI)',
        value: results.processMassIntensity,
      },
      {
        label: 'Reaction Mass Efficiency (RME)',
        value: results.reactionMassEfficiency,
      },
    ];
  }
}
