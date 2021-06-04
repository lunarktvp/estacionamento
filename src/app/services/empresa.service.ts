import { Injectable } from '@angular/core';
import { Empresa } from '../modelos/empresaModel';



@Injectable({
  providedIn: 'root'
})

export class EmpresaService {

  constructor(){
   
  }



  empresas: any[]=["Parada Certa", "Sua Vaga", "Pit Stop", "Estacionamento", "Edificio Edgar Motta" ]; 



getEmpresas(){
  return this.empresas;
}
    
}
