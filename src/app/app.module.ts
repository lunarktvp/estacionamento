import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarEmpresaComponent } from './components/cadastrar-empresa/cadastrar-empresa.component';
import { CadastrarTicketComponent } from './components/cadastrar-ticket/cadastrar-ticket.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { DetalhesEmpresaComponent } from './components/detalhes-empresa/detalhes-empresa/detalhes-empresa.component';
import { ListEmpresasComponent } from './components/list-empresas/list-empresas.component';
import { TicketsHomeComponent } from './components/tickets-home/tickets-home.component';
import { EmpresaService } from './services/empresa.service';
import { ListTicketsComponent } from './components/list-ticket/list-tickets.component';
import { CadastrarEstacionamentoComponent } from './components/estacionamento/cadastrar-estacionamento/cadastrar-estacionamento.component';
import { ListarEstabelecimentoComponent } from './components/estacionamento/listar-estabelecimento/listar-estabelecimento.component';
import { CadFuncionarioComponent } from './components/funcionarios/cad-funcionario/cad-funcionario.component';
import { ListFuncionariosComponent } from './components/funcionarios/list-funcionarios/list-funcionarios.component';
import { CadClienteComponent } from './components/clientes/cad-cliente/cad-cliente.component';
import { ListClientesComponent } from './components/clientes/list-clientes/list-clientes.component';
import { DetalhesClienteComponent } from './components/clientes/detalhes-cliente/detalhes-cliente.component';
import { DetalhesFuncionarioComponent } from './components/funcionarios/detalhes-funcionario/detalhes-funcionario.component';


@NgModule({
  declarations: [
    AppComponent,
    ListEmpresasComponent,
    CadastrarEmpresaComponent,
    CadastrosComponent,
    DetalhesEmpresaComponent,
    TicketsHomeComponent,
    CadastrarTicketComponent,
    ListTicketsComponent,
    CadastrarEstacionamentoComponent,
    ListarEstabelecimentoComponent,
    CadFuncionarioComponent,
    ListFuncionariosComponent,
    CadClienteComponent,
    ListClientesComponent,
    DetalhesClienteComponent,
    DetalhesFuncionarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
