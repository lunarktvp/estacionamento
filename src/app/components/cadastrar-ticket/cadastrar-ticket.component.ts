
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '../../modelos/ticketModel';
import { TicketService } from 'src/app/services/ticket.service';



@Component({
  selector: 'cadastrar-ticket',
  templateUrl: './cadastrar-ticket.component.html',
  styleUrls: ['./cadastrar-ticket.component.css']
})
export class CadastrarTicketComponent implements OnInit {

  ticket: Ticket;
  formulario: FormGroup;
  horaAtual: any;
  dataAtual:any;
  placa:any ="";

  constructor(
    private empService: TicketService,
    private formBuilder: FormBuilder
    ) { }




  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      dataEntrada:[null,Validators.required],
      horaEntrada:[null,Validators.required],
      placa:[null,Validators.required],
      dataSaida:[null],
      HoraSaida:[null],
    });
    
    this.dataAtual = this.pegaData();
    this.horaAtual = this.pegaHora();
    
    setInterval(()=>{
      this.horaAtual = this.pegaHora();
    },1000)

  }

  onSubmit(){

      this.empService.cadastrarTicket(this.formulario.value).subscribe(resposta=>{
        this.formulario.reset();
      });
      
  }  


  //verifica data e hora
  pegaHora(){
    //console.log(this.horaAtual)
    if(new Date().getMinutes() < 10){
      return new Date().getHours() +':'+0+new Date().getMinutes()
    }else{
      return new Date().getHours() +':'+ new Date().getMinutes()
    }   
  }

  pegaData(){
    return new Date().getDate() +'/'+ new Date().getMonth() +'/'+ new Date().getFullYear();
  }


  //Consulta Cliente por placa
  buscaPlaca(){

  }

}
