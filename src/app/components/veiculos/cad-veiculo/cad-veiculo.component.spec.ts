import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadVeiculosComponent } from './cad-veiculo.component';

describe('CadVeiculosComponent', () => {
  let component: CadVeiculosComponent;
  let fixture: ComponentFixture<CadVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadVeiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
