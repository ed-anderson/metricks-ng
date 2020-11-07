import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reference } from './models/reference';
import * as r from './references.json';

@Injectable()
export class ReferenceService {
  private readonly _references = new BehaviorSubject<Reference[]>(r.references);
  readonly references$ = this._references.asObservable();

  constructor() {}
}
