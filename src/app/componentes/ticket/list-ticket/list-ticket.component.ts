import { TikcetService } from './../../../serviços/tikcet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {

  tickets: any;

  constructor(public tckService: TikcetService) { 
   
  }
  

  ngOnInit(): void {
    this.getTickets()

  }

  getTickets(){

    this.tckService.getTicket().subscribe(ticket=>{
      this.tickets = ticket
      console.log(ticket)
    });

    
    
  }

}
