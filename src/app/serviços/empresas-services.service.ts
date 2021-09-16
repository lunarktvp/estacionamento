import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { Empresa } from '../modelos/empresa.model';



@Injectable({
  providedIn: 'root'
})

export class EmpresaService {

  empUrl = 'http://localhost:8080/emp';

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(
    private httpClient: HttpClient
  ){}

  public getEmpresas(): Observable<Empresa>{
    return this.httpClient.get<Empresa>(this.empUrl+'/empresas');
  }

  public detalheEmpresas(id: any): Observable<Empresa>{
    return this.httpClient.get<Empresa>(this.empUrl+'/empresa/'+ id);
  
  }


  public cadastrarEmpresa(empresa: any):Observable<any>{
      return this.httpClient.post<any>(this.empUrl+'/empresa',empresa);
  }
    
  public alterarEmpresa(empresa:any):Observable<any>{
    return this.httpClient.put<any>(this.empUrl+'/empresa',empresa)
  }

  public deletarEmpresa(empresa:any):Observable<any>{
    return this.httpClient.delete<any>(this.empUrl+'/empresa',empresa)
  }
}
