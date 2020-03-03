import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDetallheComponent } from './cursos-detallhe.component';

describe('CursosDetallheComponent', () => {
  let component: CursosDetallheComponent;
  let fixture: ComponentFixture<CursosDetallheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosDetallheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosDetallheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
