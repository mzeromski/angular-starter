import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInitComponent } from './error-init.component';

describe('ErrorInitComponent', () => {
  let component: ErrorInitComponent;
  let fixture: ComponentFixture<ErrorInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorInitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
