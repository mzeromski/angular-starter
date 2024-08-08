import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFilesComponent } from './config-files.component';

describe('ConfigFilesComponent', () => {
  let component: ConfigFilesComponent;
  let fixture: ComponentFixture<ConfigFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigFilesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
