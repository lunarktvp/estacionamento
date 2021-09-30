import { Cliente } from './../modelos/cliente.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  url = 'http://localhost:8080/cliente'


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
      private httpClient: HttpClient
  ) { }


    public CadastraCliente(cliente:any):Observable<any>{
      return this.httpClient.post<any>(this.url+'/novo', cliente);
    }

    public ListarClientes():Observable<any>{
      return this.httpClient.get<any>(this.url+'/listar');
    }

    public DetalhesCliente(id:any):Observable<any>{
      return this.httpClient.get<any>(this.url+'/detalhes/'+id);
    }


    public AlterarCliente(cliente:Cliente):Observable<any>{

      return this.httpClient.put<Cliente>(this.url+'/alterar',cliente);
    }


    public BuscaClientePorPlaca(placa: String):Observable<Cliente>{
      return this.httpClient.get<Cliente>(this.url+'/buscapor/'+placa)
    }

}
