import { ComponentFixture, TestBed } from '@angular/core/testing';
import { referenceMock } from 'src/tests/mocks/reference.mock';
import { ReferenceComponent } from './reference.component';

describe('ReferenceComponent', () => {
  let component: ReferenceComponent;
  let fixture: ComponentFixture<ReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferenceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceComponent);
    component = fixture.componentInstance;
    component.reference = referenceMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
