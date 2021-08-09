import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cad-funcionario',
  templateUrl: './cad-funcionario.component.html',
  styleUrls: ['./cad-funcionario.component.css']
})
export class CadFuncionarioComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private router:Router) { }

  formulario: FormGroup;

  ngOnInit(): void {
      this.formulario = this.formbuilder.group({
        matricula: [null, Validators.required],
        nome: [null, Validators.required],
        cpf: [null, Validators.required],
        nascimento: [null, Validators.required],
        cep: [null, Validators.required],
        logradouro: [null, Validators.required],
        complemento: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
        telefone: [null, Validators.required],
        email: [null, Validators.compose([Validators.email, Validators.required])],
        senha: [null , Validators.compose([Validators.required,Validators.minLength(6)])]
      })
  }

  onSubmit(){

    console.log(this.formulario.value);
   
    this.router.navigate(['/ListFuncionarios']);
   
  }

  validaCPF(): void{
    console.log("validado");
  }

}
