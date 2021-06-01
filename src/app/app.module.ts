import { EmpresaService } from './services/empresa.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmpresasComponent } from './components/list-empresas/list-empresas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmpresasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
