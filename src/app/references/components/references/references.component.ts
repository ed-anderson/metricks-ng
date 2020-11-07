import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../../services/reference/reference.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent implements OnInit {
  readonly references$ = this.referenceService.references$;

  constructor(private referenceService: ReferenceService) {}

  ngOnInit(): void {}
}
