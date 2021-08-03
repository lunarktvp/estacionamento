import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.css']
})
export class CadClienteComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }

  formulario: FormGroup;  

  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      codigo: [null, Validators.required],
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      nascimento: [null, Validators.required],
      endereco: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null, Validators.compose([Validators.email, Validators.required])],
      senha: [null , Validators.compose([Validators.required,Validators.minLength(6)])]
    })    
  }
  
  onSubmit(){

    console.log(this.formulario.value);
    this.formulario.reset;
   
  }

}

  

