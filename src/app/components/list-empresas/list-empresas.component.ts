import { Component, OnInit } from '@angular/core';

import { EmpresaService } from './../../services/empresa.service';


@Component({
  selector: 'app-list-empresas',
  templateUrl: './list-empresas.component.html',
  styleUrls: ['./list-empresas.component.css']
})
export class ListEmpresasComponent implements OnInit {
  
    empresas: string[] =[];//vetor de strings

  constructor(private Empresaservice: EmpresaService) { 
    
    //variaveis utilizadas
    
    
    this.empresas = this.Empresaservice.getEmpresas();



  }
  
  ngOnInit(): void {}
 
  

}
