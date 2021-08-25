import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarEmpresaComponent } from './components/empresa/cadastrar-empresa/cadastrar-empresa.component';
import { CadastrarTicketComponent } from './components/Ticket/cadastrar-ticket/cadastrar-ticket.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { DetalhesEmpresaComponent } from './components/empresa/detalhes-empresa/detalhes-empresa/detalhes-empresa.component';
import { ListEmpresasComponent } from './components/empresa/list-empresas/list-empresas.component';
import { TicketsHomeComponent } from './components/Ticket/tickets-home/tickets-home.component';
import { EmpresaService } from './services/empresa.service';
import { ListTicketsComponent } from './components/Ticket/list-ticket/list-tickets.component';
import { CadastrarEstacionamentoComponent } from './components/estacionamento/cadastrar-estacionamento/cadastrar-estacionamento.component';
import { ListarEstabelecimentoComponent } from './components/estacionamento/listar-estabelecimento/listar-estabelecimento.component';
import { CadFuncionarioComponent } from './components/funcionarios/cad-funcionario/cad-funcionario.component';
import { ListFuncionariosComponent } from './components/funcionarios/list-funcionarios/list-funcionarios.component';
import { CadClienteComponent } from './components/clientes/cad-cliente/cad-cliente.component';
import { ListClientesComponent } from './components/clientes/list-clientes/list-clientes.component';
import { DetalhesClienteComponent } from './components/clientes/detalhes-cliente/detalhes-cliente.component';
import { DetalhesFuncionarioComponent } from './components/funcionarios/detalhes-funcionario/detalhes-funcionario.component';
import { UtilidadesService } from './services/utilidades.service';
import { FuncionarioService } from './services/funcionario.service';
import { LoginComponent } from './components/login/login.component';
import { EncerrarTicketComponent } from './components/Ticket/encerrar-ticket/encerrar-ticket.component'



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
    DetalhesFuncionarioComponent,
    LoginComponent,
    EncerrarTicketComponent,
    

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
  providers: [
    EmpresaService,
    FuncionarioService,
    UtilidadesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
