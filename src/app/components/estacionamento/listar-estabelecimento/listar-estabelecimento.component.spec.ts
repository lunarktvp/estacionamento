import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstabelecimentoComponent } from './listar-estabelecimento.component';

describe('ListarEstabelecimentoComponent', () => {
  let component: ListarEstabelecimentoComponent;
  let fixture: ComponentFixture<ListarEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEstabelecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
