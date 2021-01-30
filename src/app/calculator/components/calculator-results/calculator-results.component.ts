import { Component, Input, OnInit } from '@angular/core';
import { CalculatorResults } from '../../models/calculator-results';
import { CalculatorResultsViewModel } from '../../models/calculator-results.vm';

@Component({
  selector: 'app-calculator-results',
  templateUrl: './calculator-results.component.html',
  styleUrls: ['./calculator-results.component.scss'],
})
export class CalculatorResultsComponent implements OnInit {
  @Input() results: CalculatorResultsViewModel[];

  constructor() {}

  ngOnInit(): void {}
}
