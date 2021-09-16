import { TikcetService } from './../../../serviços/tikcet.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/modelos/ticket.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-encerra-ticket',
  templateUrl: './encerra-ticket.component.html',
  styleUrls: ['./encerra-ticket.component.css']
})
export class EncerraTicketComponent implements OnInit {

  ticket: Ticket;
  id: any;

  formulario: FormGroup;

  constructor(
    private ticketservice: TikcetService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
    ) { }




  ngOnInit(): void {

    this.route.params.subscribe(params=>
      this.id = params['id']
      ); 

      console.log(this.id)     

      this.detalhesTicket(this.id);
  
      
  }

    detalhesTicket(id:any){
      this.ticketservice.detalheTicket(id)
      .subscribe(resposta =>{
        this.ticket = resposta
      })

      this.criaFormulario();

      console.log(this.ticket)

    }

    criaFormulario(){
      this.formulario = this.formBuilder.group({
        id: [null,Validators.required],
        placa:[null,Validators.required],
        permanencia:[null,Validators.required],
        valor:[null,Validators.required],
        idCliente: [null]
      });
    }

  onSubmit(){

      this.ticketservice.detalheTicket(this.route).subscribe(resposta=>{
        this.formulario.reset();
      });
      
  } 

}
