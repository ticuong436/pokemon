import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdvanceComponent } from './search-advance.component';

describe('SearchAdvanceComponent', () => {
  let component: SearchAdvanceComponent;
  let fixture: ComponentFixture<SearchAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAdvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
