
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from 'src/app/modelos/ticketModel';
import { TicketService } from 'src/app/services/ticket.service';



@Component({
  selector: 'encerrar-ticket',
  templateUrl: './encerrar-ticket.component.html',
  styleUrls: ['./encerrar-ticket.component.css']
})
export class EncerrarTicketComponent implements OnInit {

  ticket: Ticket;

  formulario: FormGroup;

  constructor(
    private empService: TicketService,
    private formBuilder: FormBuilder
    ) { }




  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      placa:[null,Validators.required],
      permanencia:[null,Validators.required],
      valor:[null,Validators.required],
    });
  
  }

  onSubmit(){

      this.empService.cadastrarTicket(this.formulario.value).subscribe(resposta=>{
        this.formulario.reset();
      });
      
  }  

  
}
