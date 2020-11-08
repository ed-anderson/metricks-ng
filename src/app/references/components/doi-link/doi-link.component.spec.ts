import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoiLinkPipe } from '../../pipes/doi-link/doi-link.pipe';
import { DoiLinkComponent } from './doi-link.component';

describe('DoiLinkComponent', () => {
  let component: DoiLinkComponent;
  let fixture: ComponentFixture<DoiLinkComponent>;
  let doi: string = 'doi';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoiLinkComponent, DoiLinkPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoiLinkComponent);
    component = fixture.componentInstance;
    component.doi = doi;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
