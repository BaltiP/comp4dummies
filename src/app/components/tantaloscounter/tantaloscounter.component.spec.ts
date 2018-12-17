import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TantaloscounterComponent } from './tantaloscounter.component';

describe('TantaloscounterComponent', () => {
  let component: TantaloscounterComponent;
  let fixture: ComponentFixture<TantaloscounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TantaloscounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TantaloscounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
