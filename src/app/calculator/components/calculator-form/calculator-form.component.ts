import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, AbstractControl, FormArray } from '@angular/forms';
import { CalculatorFormService } from '../../services/calculator-form/calculator-form.service';
import { CalculatorResults } from '../../models/calculator-results';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss'],
})
export class CalculatorFormComponent implements OnInit {
  @Output() calculatorResultsEmitter = new EventEmitter<CalculatorResults>();

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

  submit(): void {
    const results = this.calculatorFormService.submit(this.form);
    this.calculatorResultsEmitter.emit(results);
    console.log(results);
  }
}
