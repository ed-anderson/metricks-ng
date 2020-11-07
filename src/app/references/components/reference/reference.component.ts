import { Component, Input, OnInit } from '@angular/core';
import { Reference } from '../../services/reference/models/reference';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent implements OnInit {
  @Input() reference: Reference;

  constructor() {}

  ngOnInit(): void {}
}
