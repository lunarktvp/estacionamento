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
    horaentrada: "",
    horasaida: "",
    placa: "",
    tipoPagamento: 0,
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
    
    this.dataAtual = this.pegaData();
    this.horaAtual = this.pegaHora();
    
    setInterval(()=>{
      this.horaAtual = this.pegaHora();
    },1000)

  }

  gravarTicket(){

    this.ticket.horaentrada = this.horaAtual;
      console.log(this.ticket);
      
     
     this.empService.cadastrarTicket(this.ticket).subscribe(resposta=>{
       this.formulario.reset();
      });
      
      this.router.navigate(['/listar'])
  }  


  aVista(){
    this.ticket.tipoPagamento = 0;
  }

  aFaturar(){

    this.ticket.tipoPagamento = 1;
  }


  //verifica data e hora
  pegaHora(){
    //console.log(this.horaAtual)
    if((new Date().getMinutes() < 10) || (new Date().getHours()< 10)){
      
      if((new Date().getHours()< 10) && (new Date().getMinutes()< 10)){
         
        return '0' + new Date().getHours() + ':' + '0' +new Date().getMinutes()

      }else{

        if( (new Date().getHours()<10) && (new Date().getMinutes()>=10) ){
          
          return '0' + new Date().getHours() +':'+ new Date().getMinutes()
        
        }else{

          if( (new Date().getHours()>=10) && (new Date().getMinutes()<10) ){
            return new Date().getHours() +':'+ '0' + new Date().getMinutes()
          }
        }
      }
     
    }
    return new Date().getHours() +':'+ new Date().getMinutes()  
  }

  pegaData(){
    return new Date().getDate() +'/'+ new Date().getMonth() +'/'+ new Date().getFullYear();
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
