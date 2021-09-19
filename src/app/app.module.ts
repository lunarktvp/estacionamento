import { EntradaDiaComponent } from './componentes/relatorios/entrada-dia/entrada-dia.component';
import { NgxMaskModule } from 'ngx-mask';
import { EmpresaService } from './serviços/empresas-services.service';
import { ClienteService } from './serviços/clientes-services.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarScriptComponent } from './Script/listar-script/listar-script.component';
import { CadastrarScriptComponent } from './Script/cadastrar-script/cadastrar-script.component';
import { HomeComponent } from './home/home.component';
import { CadClienteComponent } from './componentes/clientes/cad-cliente/cad-cliente.component';
import { ListClienteComponent } from './componentes/clientes/list-cliente/list-cliente.component';
import { DetailClienteComponent } from './componentes/clientes/detail-cliente/detail-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadFuncionarioComponent } from './componentes/funcionario/cad-funcionario/cad-funcionario.component';
import { ListFuncionarioComponent } from './componentes/funcionario/list-funcionario/list-funcionario.component';
import { DetailFuncionarioComponent } from './componentes/funcionario/detail-funcionario/detail-funcionario.component';
import { CadTicketComponent } from './componentes/ticket/cad-ticket/cad-ticket.component';
import { EncerraTicketComponent } from './componentes/ticket/encerra-ticket/encerra-ticket.component';
import { ListTicketComponent } from './componentes/ticket/list-ticket/list-ticket.component';
import { CadEmpresaComponent } from './componentes/empresa/cad-empresa/cad-empresa.component';
import { LoginComponent } from './componentes/login/login.component';
import { TemplateComponent } from './componentes/template/template.component';
import { CadVeiculoComponent } from './componentes/veiculos/cad-veiculos/cad-veiculos.component'



@NgModule({
  declarations: [
    AppComponent,
    ListarScriptComponent,
    CadastrarScriptComponent,
    HomeComponent,
    CadClienteComponent,
    ListClienteComponent,
    DetailClienteComponent,
    CadFuncionarioComponent,
    ListFuncionarioComponent,
    DetailFuncionarioComponent,
    CadTicketComponent,
    EncerraTicketComponent,
    ListTicketComponent,
    CadEmpresaComponent,
    LoginComponent,
    TemplateComponent,
    EntradaDiaComponent,
    CadVeiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule, 
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true
    })
  ],
  providers: [
    ClienteService,
    EmpresaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
