import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ReagentTableComponent } from './components/reagent-table/reagent-table.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    ProductTableComponent,
    ReagentTableComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CalculatorComponent],
})
export class CalculatorModule {}
