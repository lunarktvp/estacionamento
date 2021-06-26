import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEstacionamentoComponent } from './cadastrar-estacionamento.component';

describe('CadastrarEstacionamentoComponent', () => {
  let component: CadastrarEstacionamentoComponent;
  let fixture: ComponentFixture<CadastrarEstacionamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEstacionamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEstacionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
