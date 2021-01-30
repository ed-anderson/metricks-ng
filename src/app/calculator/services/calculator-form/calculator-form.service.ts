import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculatorService } from '../calculator/calculator.service';
import { CalculatorData } from '../../models/calculator-data';
import { CalculatorResults } from '../../models/calculator-results';
import { ReagentData } from '../../models/reagent-data';

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

  submit(form: FormGroup): CalculatorResults {
    const reagents: ReagentData[] = (form.controls[
      'reagents'
    ] as FormArray).controls.map((control: FormGroup) => ({
      benign: control.controls['benign'].value,
      mass: control.controls['reagentMass'].value,
      reactant: control.controls['reactant'].value,
    }));

    const data: CalculatorData = {
      productMass: form.controls['productMass'].value,
      reagents: reagents,
    };

    return this.calculatorService.calculate(data);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      productMass: [null, [Validators.required]],
      productName: [null, [Validators.required]],
      reagents: this.fb.array([this.createReagentForm()]),
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
