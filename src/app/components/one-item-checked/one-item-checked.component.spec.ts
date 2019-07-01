import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneItemCheckedComponent } from './one-item-checked.component';

describe('OneItemCheckedComponent', () => {
  let component: OneItemCheckedComponent;
  let fixture: ComponentFixture<OneItemCheckedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneItemCheckedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneItemCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
