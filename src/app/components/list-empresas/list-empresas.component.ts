import { Empresa } from './../../modelos/empresaModel';

import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';


@Component({
  selector: 'list-empresas',
  templateUrl: './list-empresas.component.html',
  styleUrls: ['./list-empresas.component.css']
})
export class ListEmpresasComponent implements OnInit {
  
  empresas: any;
  empresa: any;

  constructor(public empService: EmpresaService) { 
   
  }
  

  ngOnInit(): void {
    this.getEmpresas()

  }

  getEmpresas(){

    this.empService.getEmpresas().subscribe(empresa=>{
      this.empresas = empresa
    });
  }

 


}
