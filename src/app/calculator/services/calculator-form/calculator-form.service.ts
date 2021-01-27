import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculatorService } from '../calculator/calculator.service';
import { CalculatorResults } from '../calculator/models/calculator-results';

@Injectable({
  providedIn: 'root',
})
export class CalculatorFormService {
  private _form: FormGroup;

  constructor(
    private calculatorService: CalculatorService,
    private fb: FormBuilder
  ) {}

  addReagent(): void {
    const reagents = this._form.controls.reagents as FormArray;
    reagents.push(this.createReagentForm());
  }

  getForm(): FormGroup {
    if (!this._form) {
      this._form = this.createForm();
    }

    return this._form;
  }

  removeReagent(index: number): void {
    const reagents = this._form.controls.reagents as FormArray;
    reagents.removeAt(index);
  }

  submit(): CalculatorResults {
    return this.calculatorService.calculate();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      productMass: [null, [Validators.required]],
      productName: [null, [Validators.required]],
      reagents: this.fb.array([[this.createReagentForm()]]),
    });
  }

  private createReagentForm(): FormGroup {
    return this.fb.group({
      benign: [false, []],
      reactant: [false, []],
      reagentMass: [null, [Validators.required]],
      reagentName: [null, [Validators.required]],
    });
  }
}
