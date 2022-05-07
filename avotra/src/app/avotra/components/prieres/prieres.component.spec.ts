import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrieresComponent } from './prieres.component';

describe('PrieresComponent', () => {
  let component: PrieresComponent;
  let fixture: ComponentFixture<PrieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrieresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
