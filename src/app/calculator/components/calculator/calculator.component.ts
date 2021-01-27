import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { CalculatorFormService } from '../../services/calculator-form/calculator-form.service';
import { CalculatorResults } from '../../services/calculator/models/calculator-results';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  providers: [CalculatorFormService],
})
export class CalculatorComponent implements OnInit {
  form: FormGroup;
  reagentForms: AbstractControl[];

  constructor(private calculatorFormService: CalculatorFormService) {}

  ngOnInit(): void {
    this.form = this.calculatorFormService.getForm();
    this.reagentForms = (this.form.controls['reagents'] as FormArray).controls;
  }

  onAddReagent(): void {
    this.calculatorFormService.addReagent();
  }

  onRemoveReagent(index: number): void {
    this.calculatorFormService.removeReagent(index);
  }

  submit(): CalculatorResults {
    return this.calculatorFormService.submit();
  }
}
