import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { funcionario } from 'src/app/modelos/funcionarioModel';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-detalhes-funcionario',
  templateUrl: './detalhes-funcionario.component.html',
  styleUrls: ['./detalhes-funcionario.component.css']
})
export class DetalhesFuncionarioComponent implements OnInit {

  formulario: FormGroup
  funcionario: funcionario

  constructor(
    private formbuilder: FormBuilder,
    private funcservice: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.detalhesFuncionario(this.route.snapshot.params=['matricula'])
   

  }

  detalhesFuncionario(id:any){
     this.funcservice.detalhesFuncionario(id)
      .subscribe(resposta=>{
        this.funcionario = resposta
      })

      this.criaFormulario()
  }

  criaFormulario(){
    this.formulario = this.formbuilder.group({
      matricula: [null],
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

  }

}
