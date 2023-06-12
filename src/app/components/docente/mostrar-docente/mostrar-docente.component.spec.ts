import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDocenteComponent } from './mostrar-docente.component';

describe('MostrarDocenteComponent', () => {
  let component: MostrarDocenteComponent;
  let fixture: ComponentFixture<MostrarDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarDocenteComponent]
    });
    fixture = TestBed.createComponent(MostrarDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
