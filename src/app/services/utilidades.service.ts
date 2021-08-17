import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {  

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  buscaCep(cep: any){
     return this.http.get('https://viacep.com.br/ws/'+cep+'/json/');
     
  }
}
