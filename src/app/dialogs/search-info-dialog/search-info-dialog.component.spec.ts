import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInfoDialogComponent } from './search-info-dialog.component';

describe('SearchInfoDialogComponent', () => {
  let component: SearchInfoDialogComponent;
  let fixture: ComponentFixture<SearchInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
