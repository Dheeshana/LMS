import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLetterInfoFormComponent } from './add-letter-info-form.component';

describe('AddLetterInfoFormComponent', () => {
  let component: AddLetterInfoFormComponent;
  let fixture: ComponentFixture<AddLetterInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLetterInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLetterInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
