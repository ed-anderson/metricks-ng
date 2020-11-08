import { TestBed } from '@angular/core/testing';
import { ReferenceService } from './reference.service';

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
});
