import { Cliente } from './../../../modelos/cliente.model';
import { VeiculoService } from 'src/app/serviços/veiculo-services';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/modelos/ticket.model';
import { TikcetService } from 'src/app/serviços/tikcet.service';
import { Veiculo } from 'src/app/modelos/veiculo.model';

@Component({
  selector: 'app-cad-ticket',
  templateUrl: './cad-ticket.component.html',
  styleUrls: ['./cad-ticket.component.css']
})
export class CadTicketComponent implements OnInit {

  ticket: Ticket = new Ticket()

  cliente:Cliente
  formulario: FormGroup;
  horaAtual: any;
  dataAtual:any;
  exibeMensalista:boolean = false;

  constructor(
    private empService: TikcetService,
    private formBuilder: FormBuilder,
    private veiculoservice: VeiculoService,
    private router: Router
    ) { }




  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      dataEntrada:[null,Validators.required],
      horaEntrada:[null,Validators.required],
      placa:[null,Validators.required],
      dataSaida:[null],
      HoraSaida:[null],
    });
    
    this.dataAtual = this.empService.pegaData();
    this.horaAtual = this.empService.pegaHora();
    
    setInterval(()=>{
      this.horaAtual = this.empService.pegaHora();
    },1000)

  }

  gravarTicket(){    
    console.log(this.ticket)
    
    if(this.ticket.tipoPagamento ==null){
      this.ticket.tipoPagamento = 0
    }

     this.empService.cadastrarTicket(this.ticket).subscribe(resposta=>{
       this.formulario.reset();
      });
      
      this.router.navigate(['tickets'])
  }  


  aVista(){
    this.ticket.tipoPagamento = 0;
  }

  aFaturar(){

    this.ticket.tipoPagamento = 1;
  }

  verificaPlaca(){

    this.veiculoservice.VeiculoPorPlaca(this.ticket.placa)
    .subscribe(resposta=>{
      if(resposta == null){
        this.exibeMensalista = false
        this.ticket.cliente = new Cliente()
      }else{
        this.ticket.cliente = resposta.cliente
        this.exibeMensalista = true
      }
  
    },erro=>{
        this.exibeMensalista=false
    })

  }

}
