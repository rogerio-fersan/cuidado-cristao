import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentidadeVisualComponent } from './identidade-visual.component';

describe('IdentidadeVisualComponent', () => {
  let component: IdentidadeVisualComponent;
  let fixture: ComponentFixture<IdentidadeVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentidadeVisualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentidadeVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
