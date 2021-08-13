
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

  constructor(
    private empService: TicketService,
    private formBuilder: FormBuilder
    ) { }




  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      horaentrada:[null,Validators.required],
      horasaida:[null,Validators.required],
      placa:[null,Validators.required],
      saida:[null,Validators.required],

      

    });
  

  }

  onSubmit(){

      this.empService.cadastrarTicket(this.formulario.value).subscribe(resposta=>{
        this.formulario.reset();
      });
      
  }  

  
}
