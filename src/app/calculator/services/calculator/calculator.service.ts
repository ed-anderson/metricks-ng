import { Injectable } from '@angular/core';
import { CalculatorResults } from './models/calculator-results';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  calculate(): CalculatorResults {
    return {} as CalculatorResults;
  }
}
