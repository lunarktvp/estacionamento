import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../modelos/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TikcetService {

  empUrl = 'http://localhost:8080/ticket';

  valorminuto:number = 0.08;


  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(
    private httpClient: HttpClient
  ){}

  public getTicket(): Observable<Ticket>{
    return this.httpClient.get<Ticket>(this.empUrl+'/listar')
  }

  public detalheTicket(id: any): Observable<Ticket>{
    return this.httpClient.get<Ticket>(this.empUrl+'/detalhes/'+ id)
  
  }


  public cadastrarTicket(ticket: any):Observable<any>{
      return this.httpClient.post<any>(this.empUrl+'/novo',ticket);
  }
    
  public alterarTicket(ticket:Ticket):Observable<Ticket>{
    return this.httpClient.put<Ticket>(this.empUrl+'/alterar',ticket)
  }

  public deletarTicket(ticket:any):Observable<any>{
    return this.httpClient.delete<any>(this.empUrl+'/ticket',ticket)
  }

  public buscaencerradosnodia():Observable<Ticket>{
    return this.httpClient.get<Ticket>(this.empUrl+'/encerradosdia')
  }

  public VerificaTicketAtivo(placa:string):Observable<Ticket>{
    return this.httpClient.get<Ticket>(this.empUrl+'/ticketativo/'+ placa)
  }


  //Calcula tempo de permanecia
  public calculapermanencia(ticket:Ticket){
    let valor: number  
    let total: string

    if(ticket.permanencia < 15){
        total = '0.00'
    }

    if(ticket.permanencia >= 15 && ticket.permanencia <=60){
      total = '5.00'
    }

    if(ticket.permanencia% 60 < 15){
      valor = Math.trunc(ticket.permanencia / 60) * 5
      total = valor.toString();
    }else{
      valor = Math.trunc((ticket.permanencia / 60) + 1) * 5
      total = valor.toString();
    }

    console.log(total)

    return total;
  }



  //verifica data e hora
  public pegaHora(){
    //console.log(this.horaAtual)
    if((new Date().getMinutes() < 10) || (new Date().getHours()< 10)){
      
      if((new Date().getHours()< 10) && (new Date().getMinutes()< 10)){
         
        return '0' + new Date().getHours() + ':' + '0' +new Date().getMinutes() + ':00'

      }else{

        if( (new Date().getHours()<10) && (new Date().getMinutes()>=10) ){
          
          return '0' + new Date().getHours() +':'+ new Date().getMinutes()+ ':00'
        
        }else{

          if( (new Date().getHours()>=10) && (new Date().getMinutes()<10) ){
            return new Date().getHours() +':'+ '0' + new Date().getMinutes()+ ':00'
          }
        }
      }
     
    }
    return new Date().getHours() +':'+ new Date().getMinutes() + ':00' 
  }

  public pegaData(){
    return new Date().getDate() +'/'+ new Date().getMonth() +'/'+ new Date().getFullYear();
  }



}
