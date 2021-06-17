import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Ticket } from '../modelos/ticketModel';



@Injectable({
  providedIn: 'root'
})

export class TicketService {

  empUrl = 'http://localhost:8080/tkt';

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(
    private httpClient: HttpClient
  ){}

  public getTicket(): Observable<Ticket>{
    return this.httpClient.get<Ticket>(this.empUrl+'/tickets');
  }

  public detalheTicket(id: any): Observable<Ticket>{
    return this.httpClient.get<Ticket>(this.empUrl+'/ticket'+ id);
  
  }


  public cadastrarTicket(ticket: any):Observable<any>{
      return this.httpClient.post<any>(this.empUrl+'/ticket',ticket);
  }
    
  public alterarTicket(ticket:any):Observable<any>{
    return this.httpClient.put<any>(this.empUrl+'/ticket',ticket)
  }

  public deletarTicket(ticket:any):Observable<any>{
    return this.httpClient.delete<any>(this.empUrl+'/ticket',ticket)
  }
}
