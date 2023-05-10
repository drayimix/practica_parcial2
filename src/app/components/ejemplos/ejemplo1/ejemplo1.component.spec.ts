import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo1Component } from './ejemplo1.component';

describe('Ejemplo1Component', () => {
  let component: Ejemplo1Component;
  let fixture: ComponentFixture<Ejemplo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejemplo1Component]
    });
    fixture = TestBed.createComponent(Ejemplo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
