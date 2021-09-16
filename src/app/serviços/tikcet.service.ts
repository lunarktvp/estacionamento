import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../modelos/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TikcetService {

  empUrl = 'http://localhost:8080/ticket';

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(
    private httpClient: HttpClient
  ){}

  public getTicket(): Observable<Ticket>{
    return this.httpClient.get<Ticket>(this.empUrl+'/listar');
  }

  public detalheTicket(id: any): Observable<Ticket>{
    return this.httpClient.get<Ticket>(this.empUrl+'/detalhes/'+ id);
  
  }


  public cadastrarTicket(ticket: any):Observable<any>{
      return this.httpClient.post<any>(this.empUrl+'/novo',ticket);
  }
    
  public alterarTicket(ticket:any):Observable<any>{
    return this.httpClient.put<any>(this.empUrl+'/ticket',ticket)
  }

  public deletarTicket(ticket:any):Observable<any>{
    return this.httpClient.delete<any>(this.empUrl+'/ticket',ticket)
  }
}
