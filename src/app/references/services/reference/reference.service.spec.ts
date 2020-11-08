import { TestBed } from '@angular/core/testing';
import { ReferenceService } from './reference.service';
import * as r from './references.json';

describe('ReferenceService', () => {
  let service: ReferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferenceService],
    });
    service = TestBed.inject(ReferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialise with references$ with value from JSON file', (done: DoneFn) => {
    service.references$.subscribe((refs) => {
      expect(refs).toEqual(r.references);
      done();
    });
  });
});
