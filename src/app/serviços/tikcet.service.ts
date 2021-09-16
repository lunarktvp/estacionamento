import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../modelos/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TikcetService {

  empUrl = 'http://localhost:8080/ticket';

  permancencia:number;
  valorminuto:number = 0.10;


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
    
  public alterarTicket(ticket:Ticket):Observable<Ticket>{
    return this.httpClient.put<Ticket>(this.empUrl+'/alterar',ticket)
  }

  public deletarTicket(ticket:any):Observable<any>{
    return this.httpClient.delete<any>(this.empUrl+'/ticket',ticket)
  }


  //Calcula tempo de permanecia
  public calculapermanencia(ticket:Ticket){

    let total:any;
    let valor:number;

    this.permancencia = 60 * (parseInt(ticket.horasaida.substr(0,2)) - parseInt(ticket.horaEntrada.substr(0,2))) 
    this.permancencia = this.permancencia + (parseInt(ticket.horasaida.substr(3,4)) - parseInt(ticket.horaEntrada.substr(3,4)))
    

    valor = this.permancencia * this.valorminuto;

    total=valor.toString();
    total= total.substr(0,4)    
    return total;
  }



  //verifica data e hora
  public pegaHora(){
    //console.log(this.horaAtual)
    if((new Date().getMinutes() < 10) || (new Date().getHours()< 10)){
      
      if((new Date().getHours()< 10) && (new Date().getMinutes()< 10)){
         
        return '0' + new Date().getHours() + ':' + '0' +new Date().getMinutes()

      }else{

        if( (new Date().getHours()<10) && (new Date().getMinutes()>=10) ){
          
          return '0' + new Date().getHours() +':'+ new Date().getMinutes()
        
        }else{

          if( (new Date().getHours()>=10) && (new Date().getMinutes()<10) ){
            return new Date().getHours() +':'+ '0' + new Date().getMinutes()
          }
        }
      }
     
    }
    return new Date().getHours() +':'+ new Date().getMinutes()  
  }

  public pegaData(){
    return new Date().getDate() +'/'+ new Date().getMonth() +'/'+ new Date().getFullYear();
  }



}
