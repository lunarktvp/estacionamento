import { ListarEstabelecimentoComponent } from './components/estacionamento/listar-estabelecimento/listar-estabelecimento.component';
import { CadastrarEstacionamentoComponent } from './components/estacionamento/cadastrar-estacionamento/cadastrar-estacionamento.component';
import { DetalhesEmpresaComponent } from './components/detalhes-empresa/detalhes-empresa/detalhes-empresa.component';
import { ListEmpresasComponent } from './components/list-empresas/list-empresas.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { CadastrarEmpresaComponent } from './components/cadastrar-empresa/cadastrar-empresa.component';
import { TicketsHomeComponent } from './components/tickets-home/tickets-home.component';
import { CadastrarTicketComponent } from './components/cadastrar-ticket/cadastrar-ticket.component';
import { ListTicketsComponent } from './components/list-ticket/list-tickets.component';
const routes: Routes = [
  {path:'cadastros',component: CadastrosComponent},
  //paths relativos a empresas
  {path:'cadEmpresa',component: CadastrarEmpresaComponent},
  {path:'listarempresas',component: ListEmpresasComponent},
  {path:'detalhesempresa/:id',component: DetalhesEmpresaComponent},
  //paths relativos a estabelecimentos
  {path:'CadEstabelecimento', component:CadastrarEstacionamentoComponent},
  {path:'ListEstabelecimentos', component:ListarEstabelecimentoComponent},
  //paths relativos a tickets
  {path:'tickets',component:TicketsHomeComponent},
  {path:'cadticket', component:CadastrarTicketComponent},
  {path:'detalhesticket', component:ListTicketsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
