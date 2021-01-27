import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit {
  @Input() form: FormGroup;

  productMass = 'product mass';
  productName = 'product name';

  massFormControl: AbstractControl;
  nameFormControl: AbstractControl;

  constructor() {}

  ngOnInit(): void {
    this.massFormControl = this.form.controls['productMass'];
    this.nameFormControl = this.form.controls['productName'];
  }
}
