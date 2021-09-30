import { ClienteService } from './../../../serviços/clientes-services.service';
import { Cliente } from './../../../modelos/cliente.model';
import { VeiculoService } from 'src/app/serviços/veiculo-services';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/modelos/ticket.model';
import { TikcetService } from 'src/app/serviços/tikcet.service';

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
  exibeMensalista:boolean = false;
  gravar: boolean = false

  constructor(
    private empService: TikcetService,
    private formBuilder: FormBuilder,
    private veiculoservice: VeiculoService,
    private clienteservice :ClienteService,
    private router: Router,
    private ticketservice: TikcetService
    ) { }




  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      dataEntrada:[null,Validators.required],
      horaEntrada:[null,Validators.required],
      placa:[null,Validators.required],
      dataSaida:[null],
      HoraSaida:[null],
    });
    
    this.horaAtual = this.empService.pegaHora();
    
    setInterval(()=>{
      this.horaAtual = this.empService.pegaHora();
    },1000)

  }



  verificaPlaca(){
  
    this.veiculoservice.VeiculoPorPlaca(this.ticket.placa)
    .subscribe(resposta=>{

      if(resposta == null){
        this.exibeMensalista = false
        this.VerificaTicketAtivoPelaPlaca(this.ticket.placa)
        this.gravar = true
      }else{
        this.VerificaTicketAtivoPelaPlaca(this.ticket.placa)
        this.BuscaClientePorPlaca(this.ticket.placa)
        
        this.exibeMensalista = true
      }
  
    },erro=>{
        this.exibeMensalista=false
    })

  }



  VerificaTicketAtivoPelaPlaca(placa: string){    
    
    this.ticketservice.VerificaTicketAtivo(placa).subscribe(
      resposta=>{
        if(resposta!=null){
          this.ticket = resposta
          alert("Essa Placa ja está vinculada a um ticket em aberto")
          this.router.navigate(['encerrar/'+this.ticket.id])
        }
      }
    )

  }


  BuscaClientePorPlaca(placa:String){
 
    this.clienteservice.BuscaClientePorPlaca(placa).subscribe(resposta=>{
      this.ticket.cliente =  resposta
    })
    

  }





  
  aVista(){
    this.gravar= true
    this.ticket.tipoPagamento = 0;
    this.gravarTicket()
  }

  aFaturar(){
    this.gravar= true
    this.ticket.tipoPagamento = 1;
    this.gravarTicket()
  }

  


  gravarTicket(){
      if(this.gravar){

        if(this.ticket.tipoPagamento ==null){
          this.ticket.tipoPagamento = 0
        }
    
        console.log(this.ticket)
        
        this.empService.cadastrarTicket(this.ticket).subscribe(resposta=>{
          this.formulario.reset();
         });
         
         this.router.navigate(['tickets'])  

      }else{
        this.verificaPlaca()
      }  
  
}

}
