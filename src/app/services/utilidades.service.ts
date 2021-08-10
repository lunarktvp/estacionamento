import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {  

  constructor(private http: HttpClient) { }

  buscaCep(cep: any){
     return this.http.get('viacep.com.br/ws/'+cep+'/json/');
  }
}
