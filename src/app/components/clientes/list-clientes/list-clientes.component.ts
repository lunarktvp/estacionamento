import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

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
