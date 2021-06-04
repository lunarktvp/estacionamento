import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';


@Component({
  selector: 'list-empresas',
  templateUrl: './list-empresas.component.html',
  styleUrls: ['./list-empresas.component.css']
})
export class ListEmpresasComponent implements OnInit {
  

  constructor(public empService: EmpresaService) { 
    
  }
  
   empresasTeste:any[]=["teste","copola","mastruz"];

   empresasService: any[] = this.empService.getEmpresas();


  ngOnInit(): void {}
 
  

}
