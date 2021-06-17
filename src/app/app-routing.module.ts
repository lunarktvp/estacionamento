import { DetalhesEmpresaComponent } from './components/detalhes-empresa/detalhes-empresa/detalhes-empresa.component';
import { ListEmpresasComponent } from './components/list-empresas/list-empresas.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { CadastrarEmpresaComponent } from './components/cadastrar-empresa/cadastrar-empresa.component';
import { TicketsHomeComponent } from './components/tickets-home/tickets-home.component';
import { CadastrarTicketComponent } from './components/cadastrar-ticket/cadastrar-ticket.component'
const routes: Routes = [
  {path:'cadastros',component: CadastrosComponent},
  {path:'cadEmpresa',component: CadastrarEmpresaComponent},
  {path:'listarempresas',component: ListEmpresasComponent},
  {path:'detalhesempresa/:id',component: DetalhesEmpresaComponent},
  {path:'tickets',component:TicketsHomeComponent},
  {path:'cadticket', component:CadastrarTicketComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
