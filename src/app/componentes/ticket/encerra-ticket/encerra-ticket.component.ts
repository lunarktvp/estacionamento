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

  ticket: Ticket;
  id: any;
  hora:string;
  minutos:string;

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

      this.detalhesTicket(this.id);

      setInterval(()=>{
        this.router.navigate(['tickets'])
      },30000)
      
  }

    detalhesTicket(id:any){
      this.ticketservice.detalheTicket(id)
      .subscribe(resposta =>{
        this.ticket = resposta
        this.ticket.horasaida =  this.ticketservice.pegaHora();

        console.log(this.ticketservice.calculapermanencia(this.ticket)+' Tentando calcular a saida')

      })

      this.criaFormulario();
      
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
