import { Veiculo } from './../../../modelos/veiculo.model';
import { Cliente } from './../../../modelos/cliente.model';
import { ClienteService } from './../../../serviços/clientes-services.service';
import { VeiculoService } from 'src/app/serviços/veiculo-services';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cad-veiculos',
  templateUrl: './cad-veiculos.component.html',
  styleUrls: ['./cad-veiculos.component.css']
})
export class CadVeiculoComponent implements OnInit {

  idCliente: number
  cliente: Cliente = new Cliente()
  veiculo: Veiculo = new Veiculo()
  veiculos:any
  
  constructor(
    private veiculoservice: VeiculoService,
    private clienteservice: ClienteService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  formulario: FormGroup;  

  ngOnInit(): void {
  
      this.route.params.subscribe(resposta=>{
        this.idCliente = resposta['id']
      })


      this.clienteservice.DetalhesCliente(this.idCliente)
      .subscribe(resposta=>{
          this.cliente = resposta
      }, error=>{
        alert("Impossivel carregar Cliente!")
      })


      this.listarPlacas()
  }

  novaPlaca(){
    this.veiculo.idCliente = this.cliente.id
    
    console.log(this.veiculo)

    this.veiculoservice.CadastrarVeiculo(this.veiculo)
    .subscribe(resposta=>{
    })
  }

  listarPlacas(){
    this.veiculoservice.ListarVeiculo().subscribe(resposta=>{
      this.veiculos = resposta
      console.log(this.veiculos)
    })
  }

}
