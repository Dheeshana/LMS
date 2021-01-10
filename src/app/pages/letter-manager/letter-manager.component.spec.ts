import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterManagerComponent } from './letter-manager.component';

describe('LetterManagerComponent', () => {
  let component: LetterManagerComponent;
  let fixture: ComponentFixture<LetterManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
