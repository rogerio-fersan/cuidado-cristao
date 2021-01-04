import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraRodapeComponent } from './barra-rodape.component';

describe('BarraRodapeComponent', () => {
  let component: BarraRodapeComponent;
  let fixture: ComponentFixture<BarraRodapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraRodapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraRodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
