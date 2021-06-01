import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor() { }


 getEmpresas(){
 
  let empresas: string[]=["Parada Certa", "Pit Stop" , "Fica Aqui" , "Vaga Legal" , "Sua Vaga"];
  
    return empresas;
 }




}
