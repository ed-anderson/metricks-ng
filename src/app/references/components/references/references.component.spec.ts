import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { referencesMock } from 'src/tests/mocks/references.mock';
import { ReferenceService } from '../../services/reference/reference.service';
import { ReferencesComponent } from './references.component';

describe('ReferencesComponent', () => {
  let component: ReferencesComponent;
  let fixture: ComponentFixture<ReferencesComponent>;
  let referenceServiceStub: Partial<ReferenceService> = {
    references$: of(referencesMock),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferencesComponent],
      providers: [
        { provide: ReferenceService, useValue: referenceServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have references$ be ReferenceService.references$', (done: DoneFn) => {
    component.references$.subscribe((refs) => {
      expect(refs).toEqual(referencesMock);
      done();
    });
  });
});
