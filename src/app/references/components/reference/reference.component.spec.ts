import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reference } from '../../services/reference/models/reference';
import { ReferenceComponent } from './reference.component';

describe('ReferenceComponent', () => {
  let component: ReferenceComponent;
  let fixture: ComponentFixture<ReferenceComponent>;
  let referenceMock: Reference = {
    label: 'label',
    authors: ['A. B. Author'],
    title: 'Title',
    journal: 'Journal',
    year: 2020,
    volume: 1,
    pageStart: 1,
    pageEnd: 2,
    doi: 'doi',
  };

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
