/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgModelStandaloneComponent } from './ngmodelstandalone.component';

describe('NgmodelstandaloneComponent', () => {
  let component: NgModelStandaloneComponent;
  let fixture: ComponentFixture<NgModelStandaloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgModelStandaloneComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
