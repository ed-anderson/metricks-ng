import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ReagentTableComponent } from './components/reagent-table/reagent-table.component';
import { CalculatorFormComponent } from './components/calculator-form/calculator-form.component';
import { CalculatorResultsComponent } from './components/calculator-results/calculator-results.component';
import { DisplayResultComponent } from './components/display-result/display-result.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    ProductTableComponent,
    ReagentTableComponent,
    CalculatorFormComponent,
    CalculatorResultsComponent,
    DisplayResultComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CalculatorComponent],
})
export class CalculatorModule {}
