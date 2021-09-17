import { Ticket } from 'src/app/modelos/ticket.model';
import { TikcetService } from 'src/app/serviços/tikcet.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-dia',
  templateUrl: './entrada-dia.component.html',
  styleUrls: ['./entrada-dia.component.css']
})
export class EntradaDiaComponent implements OnInit {

  tickets:any
   totalEntradas:number
  constructor(
      private router: Router,
      private ticektservice: TikcetService
  ) { }

  ngOnInit(): void {

    this.ticektservice.buscaencerradosnodia()
    .subscribe(resposta=>{
      this.tickets = resposta
      console.log(this.tickets)
      this.totalEntradas = this.totalEntradas + resposta.valor
    })

  }

  fazerLogin(){
    this.router.navigate(['/home'])
  }

}
