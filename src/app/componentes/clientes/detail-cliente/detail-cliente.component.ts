
import { ClienteService } from './../../../serviços/clientes-services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cliente',
  templateUrl: './detail-cliente.component.html',
  styleUrls: ['./detail-cliente.component.css']
})
export class DetailClienteComponent implements OnInit {


  
  constructor(
    private formbuilder: FormBuilder,
    private clienteservice: ClienteService,
    private router: Router
    ) { }

  formulario: FormGroup;  

  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      nome: [null, Validators.required],
      cgc: [null, Validators.required],
      nascimento: [null, Validators.required],
      endereco: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null, Validators.compose([Validators.email, Validators.required])],
    })    
  }
  
  onSubmit(){

    console.log(this.formulario.value)
  

      this.clienteservice.AlterarCliente(this.formulario.value).subscribe(
          resposta=>{
              this.formulario.reset()
              this.router.navigate(['/ListClientes'])
          }
      );

  }

}
