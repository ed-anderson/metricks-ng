import { Component, Input, OnInit } from '@angular/core';
import { DoiLinkPipe } from '../../pipes/doi-link/doi-link.pipe';

@Component({
  selector: 'app-doi-link',
  templateUrl: './doi-link.component.html',
  styleUrls: ['./doi-link.component.scss'],
  providers: [DoiLinkPipe],
})
export class DoiLinkComponent implements OnInit {
  @Input() doi: string;

  constructor() {}

  ngOnInit(): void {}
}
