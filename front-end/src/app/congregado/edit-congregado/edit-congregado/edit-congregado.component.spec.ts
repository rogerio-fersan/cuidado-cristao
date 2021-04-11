import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCongregadoComponent } from './edit-congregado.component';

describe('EditCongregadoComponent', () => {
  let component: EditCongregadoComponent;
  let fixture: ComponentFixture<EditCongregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCongregadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCongregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
