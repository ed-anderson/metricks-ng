import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoiLinkComponent } from './doi-link.component';

describe('DoiLinkComponent', () => {
  let component: DoiLinkComponent;
  let fixture: ComponentFixture<DoiLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoiLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoiLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
