import { ClienteService } from './../../../serviços/clientes-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {

  clientes:any;

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {

    this.getClientes();

  }



 getClientes(){

    this.clienteService.ListarClientes().subscribe(
      cliente =>{
        this.clientes = cliente
      }
    );
 }

}
