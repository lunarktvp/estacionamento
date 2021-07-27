import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-funcionario',
  templateUrl: './cad-funcionario.component.html',
  styleUrls: ['./cad-funcionario.component.css']
})
export class CadFuncionarioComponent implements OnInit {

  constructor(private formbuilder: FormBuilder ) { }

  formulario: FormGroup;

  ngOnInit(): void {
      this.formulario = this.formbuilder.group({
        matricula: [null, Validators.required],
        nome: [null, Validators.required],
        cpf: [null, Validators.required],
        nascimento: [null, Validators.required],
        endereco: [null, Validators.required],
        telefone: [null, Validators.required],
        email: [null, Validators.email],
        senha: [null, Validators.required]
      })
  }

  onSubmit(){

  }

}
