import { TikcetService } from './../../../serviços/tikcet.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/modelos/ticket.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-encerra-ticket',
  templateUrl: './encerra-ticket.component.html',
  styleUrls: ['./encerra-ticket.component.css']
})
export class EncerraTicketComponent implements OnInit {

  ticket: Ticket
  id: any
  hora:string
  minutos:string
  valortotal: any

  formulario: FormGroup;

  constructor(
    private ticketservice: TikcetService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) { }




  ngOnInit(): void {

    this.route.params.subscribe(params=>
      this.id = params['id']
      );  

      this.detalhesTicket(this.id)
      
  }


    detalhesTicket(id:any){
      this.ticketservice.detalheTicket(id)
      .subscribe(resposta =>{
        this.ticket = resposta

        this.valortotal = this.ticketservice.calculapermanencia(this.ticket)
        //this.ticket.valor = this.ticketservice.calculapermanencia(this.ticket);
      })

      this.criaFormulario();
      
    }

    criaFormulario(){
      this.formulario = this.formBuilder.group({
        id: [null,Validators.required],
        placa:[null,Validators.required],
        saida:[null,Validators.required],
        entrada:[null,Validators.required],
        valor:[null],
        idCliente: [null]
      });
    }

  onSubmit(){

      this.ticketservice.detalheTicket(this.route).subscribe(resposta=>{
        this.formulario.reset();
      });
      
  } 

  encerrarTicket(){
    this.ticket.situacao = 9
    this.ticketservice.cadastrarTicket(this.ticket)
    .subscribe(reposta=>{
      this.router.navigate(['tickets']);
    })
  }

}
