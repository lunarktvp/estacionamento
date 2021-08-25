
import { Ticket } from 'src/app/modelos/ticketModel';
import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';


@Component({
  selector: 'list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {
  
  tickets: any;

  constructor(public tckService: TicketService) { 
   
  }
  

  ngOnInit(): void {
    this.getTickets()

  }

  getTickets(){

    this.tckService.getTicket().subscribe(ticket=>{
      this.tickets = ticket
    });

    
  }

 


}