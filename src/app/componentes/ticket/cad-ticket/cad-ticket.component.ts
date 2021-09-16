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

  ticket: Ticket ={
    id: "",
    horaEntrada: "",
    horasaida: "",
    placa: "",
    valor: "",
    idCliente: "",
    tipoPagamento: 0,
    situacao: ""
  };


  formulario: FormGroup;
  horaAtual: any;
  dataAtual:any;
  exibeMensalista:boolean = false;

  constructor(
    private empService: TikcetService,
    private formBuilder: FormBuilder,
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

    this.ticket.horaEntrada = this.horaAtual;
      console.log(this.ticket);
      
     
     this.empService.cadastrarTicket(this.ticket).subscribe(resposta=>{
       this.formulario.reset();
      });
      
      this.router.navigate(['/tickets'])
  }  


  aVista(){
    this.ticket.tipoPagamento = 0;
  }

  aFaturar(){

    this.ticket.tipoPagamento = 1;
  }


  


  //Consulta Cliente por placa

  verificaPlaca(){
    if(this.ticket.placa == "placa"){
      this.exibeMensalista = true;
    }else{
      this.exibeMensalista = false;
    }
  }
}
