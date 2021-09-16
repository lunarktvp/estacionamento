import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { funcionario } from '../modelos/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  funcUrl = 'http://localhost:8080/func';

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public ProximaMatricula(){
    return this.httpClient.get(this.funcUrl+'/mat');
  }

  public listFuncionarios(): Observable<funcionario>{
    return this.httpClient.get<funcionario>(this.funcUrl+'/funcionarios');
  }

  public detalhesFuncionario(id: any): Observable<funcionario>{
    return this.httpClient.get<funcionario>(this.funcUrl+'/funcionario/'+ id);
  
  }


  public cadastrarFuncionario(funcionario: any):Observable<any>{
      return this.httpClient.post<any>(this.funcUrl+'/funcionario',funcionario);
  }
    
  public alterarFuncionario(funcionario:any):Observable<any>{
    return this.httpClient.put<any>(this.funcUrl+'/funcionario',funcionario)
  }

}
