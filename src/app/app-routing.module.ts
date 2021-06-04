import { ListEmpresasComponent } from './components/list-empresas/list-empresas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { CadastrarEmpresaComponent } from './components/cadastrar-empresa/cadastrar-empresa.component';

const routes: Routes = [
  {path:'cadastros',component: CadastrosComponent},
  {path:'cadEmpresa',component: CadastrarEmpresaComponent},
  {path:'ticket',component: ListEmpresasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
