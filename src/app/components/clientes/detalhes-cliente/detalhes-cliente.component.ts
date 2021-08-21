import { ClienteService } from './../../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/clienteModel';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-detalhes-cliente',
  templateUrl: './detalhes-cliente.component.html',
  styleUrls: ['./detalhes-cliente.component.css']
})
export class DetalhesClienteComponent implements OnInit {

  formulario:FormGroup
  cliente: Cliente;
  idCliente:any;

  constructor(
    private formbuilder: FormBuilder,
    private route:ActivatedRoute,
    private clienteService: ClienteService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params=>
      this.idCliente = params['id']
      );

      this.buscarCliente(this.idCliente);
     

  }


  buscarCliente(id:any){
    this.clienteService.DetalhesCliente(id).subscribe(
      resposta=>{
          this.cliente = resposta;
      }
      )

      this.criaFormulario();
  }




  criaFormulario(){
    this.formulario = this.formbuilder.group({
      id: [null],
      nome: [null, Validators.required],
      cgc: [null, Validators.required],
      nascimento: [null, Validators.required],
      endereco: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null, Validators.compose([Validators.email, Validators.required])],
    }) 
  }

  onSubmit(){

    this.clienteService.AlterarCliente(this.formulario.value).subscribe(
      reposta=>{
        this.router.navigate(['/ListClientes']);
      }
    );

  }

}
