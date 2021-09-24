import { ClienteService } from './../../../serviços/clientes-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {

  clientes:any;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
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
 alterarSituacao(){
  this.clientes.situacao = 9
  this.clientes.CadastraCliente(this.clientes)
  .subscribe((reposta: any)=>{
    this.router.navigate(['cliente']);
  })
}
voltarSituacao(){
  this.clientes.situacao = 0
  this.clientes.CadastraCliente(this.clientes)
  .subscribe((reposta: any)=>{
    this.router.navigate(['cliente']);
  })
}

}
