import { ClienteService } from './../../../serviços/clientes-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente.model';

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

  alterarSituacao(cliente: Cliente){

    if(cliente.situacao==9){
      cliente.situacao = 0 
    }else{
      cliente.situacao = 9
    }

    
  
   this.clienteService.AlterarCliente(cliente).subscribe(
     resposta=>{
        this.ngOnInit()
     }
   )

  }

}
