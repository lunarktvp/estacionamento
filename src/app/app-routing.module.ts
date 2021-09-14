import { EncerrarTicketComponent } from './components/Ticket/encerrar-ticket/encerrar-ticket.component';
import { DetalhesClienteComponent } from './components/clientes/detalhes-cliente/detalhes-cliente.component';
import { ListFuncionariosComponent } from './components/funcionarios/list-funcionarios/list-funcionarios.component';
import { CadFuncionarioComponent } from './components/funcionarios/cad-funcionario/cad-funcionario.component';
import { DetalhesFuncionarioComponent } from './components/funcionarios/detalhes-funcionario/detalhes-funcionario.component';
import { ListarEstabelecimentoComponent } from './components/estacionamento/listar-estabelecimento/listar-estabelecimento.component';
import { CadastrarEstacionamentoComponent } from './components/estacionamento/cadastrar-estacionamento/cadastrar-estacionamento.component';
import { DetalhesEmpresaComponent } from './components/empresa/detalhes-empresa/detalhes-empresa/detalhes-empresa.component';
import { ListEmpresasComponent } from './components/empresa/list-empresas/list-empresas.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { CadastrarEmpresaComponent } from './components/empresa/cadastrar-empresa/cadastrar-empresa.component';
import { TicketsHomeComponent } from './components/Ticket/tickets-home/tickets-home.component';
import { CadastrarTicketComponent } from './components/Ticket/cadastrar-ticket/cadastrar-ticket.component';
import { ListTicketsComponent } from './components/Ticket/list-ticket/list-tickets.component';
import { CadClienteComponent } from './components/clientes/cad-cliente/cad-cliente.component';
import { ListClientesComponent } from './components/clientes/list-clientes/list-clientes.component';
import { LoginComponent } from './components/login/login.component';
import { ListVeiculoComponent } from './components/veiculos/list-veiculo/list-veiculo.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  //
  {path:'cadastros',component: CadastrosComponent},
  //paths relativos a empresas
  {path:'cadEmpresa',component: CadastrarEmpresaComponent},
  {path:'listarempresas',component: ListEmpresasComponent},
  {path:'detalhesempresa/:id',component: DetalhesEmpresaComponent},
  //paths relativos a estabelecimentos
  {path:'CadEstabelecimento', component: CadastrarEstacionamentoComponent},
  {path:'ListEstabelecimentos', component: ListarEstabelecimentoComponent},
  //paths relativos a funcionarios
  {path:'CadFuncionario', component: CadFuncionarioComponent},
  {path:'ListFuncionarios', component: ListFuncionariosComponent},
  {path:'DetalhesFuncionario/:matricula', component: DetalhesFuncionarioComponent},
  //paths relativos a clientes
  {path:'CadCliente', component: CadClienteComponent},
  {path:'ListClientes', component: ListClientesComponent},
  {path:'DetalhesCliente/:id', component: DetalhesClienteComponent},
  //paths relativos a tickets
  {path:'tickets',component: TicketsHomeComponent},
  {path:'cadticket', component: CadastrarTicketComponent},
  {path:'listar', component: ListTicketsComponent},
  {path: 'encerrar', component: EncerrarTicketComponent},
  //paths relativos a veiculos
  {path: 'veiculos', component: ListVeiculoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
