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


@NgModule({
  declarations: [
    AppComponent,
    ListEmpresasComponent,
    CadastrarEmpresaComponent,
    CadastrosComponent,
    DetalhesEmpresaComponent,
    TicketsHomeComponent,
    CadastrarTicketComponent
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
