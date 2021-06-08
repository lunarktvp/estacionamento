import { EmpresaService } from './services/empresa.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule} from 'angular2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmpresasComponent } from './components/list-empresas/list-empresas.component';
import { CadastrarEmpresaComponent } from './components/cadastrar-empresa/cadastrar-empresa.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { DetalhesEmpresaComponent } from './components/detalhes-empresa/detalhes-empresa/detalhes-empresa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketsHomeComponent } from './components/tickets-home/tickets-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmpresasComponent,
    CadastrarEmpresaComponent,
    CadastrosComponent,
    DetalhesEmpresaComponent,
    TicketsHomeComponent
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
