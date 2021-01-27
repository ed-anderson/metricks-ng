import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reagent-table',
  templateUrl: './reagent-table.component.html',
  styleUrls: ['./reagent-table.component.scss'],
})
export class ReagentTableComponent implements OnInit {
  @Input() forms: FormGroup[];
  @Output() addReagentEvent = new EventEmitter<void>();
  @Output() removeReagentEvent = new EventEmitter<number>();

  additionalInformation = 'additional information';
  reagentMass = 'reagent mass';
  reagentName = 'reagent name';

  constructor() {}

  ngOnInit(): void {}

  addReagent(): void {
    this.addReagentEvent.emit();
  }

  hasMany(value: any[]): boolean {
    return value.length > 1;
  }

  removeReagent(index: number): void {
    this.removeReagentEvent.emit(index);
  }
}
