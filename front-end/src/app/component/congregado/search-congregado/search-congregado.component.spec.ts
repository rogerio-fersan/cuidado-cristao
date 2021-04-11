import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCongregadoComponent } from './search-congregado.component';

describe('SearchCongregadoComponent', () => {
  let component: SearchCongregadoComponent;
  let fixture: ComponentFixture<SearchCongregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCongregadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCongregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
