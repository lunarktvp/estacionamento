import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../modelos/veiculo.model';

@Injectable({
  providedIn: 'root'
})

export class VeiculoService {

  url = 'http://localhost:8080/veiculo'


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
      private httpClient: HttpClient
  ) { }


    public CadastrarVeiculo(veiculo:any):Observable<any>{
      return this.httpClient.post<any>(this.url+'/novo', veiculo);
    }

    public ListarVeiculo():Observable<any>{
      return this.httpClient.get<any>(this.url+'/listar');
    }

    public ListarVeiculoPorCliente(id:any):Observable<any>{
      return this.httpClient.get<any>(this.url+'/listar/'+id);
    }

    public DetalhesVeiculo(id:any):Observable<any>{
      return this.httpClient.get<any>(this.url+'/detalhes/'+id);
    }


    public AlterarVeiculo(cliente:any):Observable<any>{
      return this.httpClient.put<any>(this.url+'/alterar',cliente);
    }

    public VeiculoPorPlaca(placa:string):Observable<any>{
      return this.httpClient.get<any>(this.url+'/detalhe/'+placa);
    }


}
