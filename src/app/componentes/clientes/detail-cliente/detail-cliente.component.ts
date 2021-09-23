import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteService } from 'src/app/serviços/clientes-services.service';

@Component({
  selector: 'app-detail-cliente',
  templateUrl: './detail-cliente.component.html',
  styleUrls: ['./detail-cliente.component.css']
})
export class DetailClienteComponent implements OnInit {

  cliente: Cliente = new Cliente
  id: number

  constructor(
    private clienteservice: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params['id']
    })

    this.clienteservice.DetalhesCliente(this.id)
    .subscribe(
      resposta=>{
      this.cliente = resposta
    })
  }

  alterarCliente(){
    this.clienteservice.AlterarCliente(this.cliente)
    .subscribe(reposta=>{
      this.router.navigate(['/clientes'])
    } , error => {
      alert('Preencha todos os campos')
    }
    )
  }

}
