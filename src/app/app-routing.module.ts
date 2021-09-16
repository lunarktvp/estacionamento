import { EncerraTicketComponent } from './componentes/ticket/encerra-ticket/encerra-ticket.component';
import { TemplateComponent } from './componentes/template/template.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadEmpresaComponent } from './componentes/empresa/cad-empresa/cad-empresa.component';
import { ListFuncionarioComponent } from './componentes/funcionario/list-funcionario/list-funcionario.component';
import { CadastrarScriptComponent } from './Script/cadastrar-script/cadastrar-script.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarScriptComponent } from './Script/listar-script/listar-script.component';
import { ListClienteComponent } from './componentes/clientes/list-cliente/list-cliente.component';
import { CadClienteComponent } from './componentes/clientes/cad-cliente/cad-cliente.component';
import { CadFuncionarioComponent } from './componentes/funcionario/cad-funcionario/cad-funcionario.component';
import { ListTicketComponent } from './componentes/ticket/list-ticket/list-ticket.component';
import { CadTicketComponent } from './componentes/ticket/cad-ticket/cad-ticket.component';
import { EntradaDiaComponent } from './componentes/relatorios/entrada-dia/entrada-dia.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path:'', redirectTo: '/login', pathMatch: 'full' },

  //Path relativos a toda a aplicação dentro do layout
  { path:'', component: TemplateComponent, children:[
    { path: 'scripts', component: ListarScriptComponent },
  { path: 'home', component: HomeComponent },
  { path:'novoScript', component: CadastrarScriptComponent },

  { path: 'clientes', component: ListClienteComponent },
  { path: 'novocliente', component: CadClienteComponent },
  
  { path: 'funcionarios', component: ListFuncionarioComponent },
  { path: 'novofuncionario', component: CadFuncionarioComponent },

  { path: 'tickets', component: ListTicketComponent },
  { path: 'novoticket', component: CadTicketComponent },
  { path: 'encerrar/:id', component: EncerraTicketComponent },

  { path: 'empresa', component: CadEmpresaComponent },

  { path: 'entradas', component: EntradaDiaComponent }

  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
