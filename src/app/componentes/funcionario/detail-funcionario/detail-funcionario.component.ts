import { funcionario } from './../../../modelos/funcionario.model';
import { FuncionarioService } from './../../../serviços/funcionario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-funcionario',
  templateUrl: './detail-funcionario.component.html',
  styleUrls: ['./detail-funcionario.component.css']
})
export class DetailFuncionarioComponent implements OnInit {

  constructor(
    private formbuilder: FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    private funcservice: FuncionarioService
    ) { }

  formulario: FormGroup;
  cep: any;
  ProximaMatricula: any;
  valido: boolean = true;
  id:any
  funcionario: funcionario

    
  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      this.id = params['id']
    })

    this.detalhescliente(this.id)

  }

  onSubmit(){
   this.funcionario = this.formulario.value
   console.log(this.funcionario)

   this.funcservice.cadastrarFuncionario(this.funcionario).subscribe(resposta=>{
      this.router.navigate(['/funcionarios']);
    });
 
  }

  detalhescliente(id:any){
    this.funcservice.detalhesFuncionario(id)
    .subscribe(resposta=>{
      this.funcionario = resposta
    })

    this.criaFormulario();
  }


  criaFormulario(){
    this.formulario = this.formbuilder.group({
      matricula: [null,Validators.required],
      nome: [null, Validators.required],
      cpf: [null, Validators.compose([Validators.required,Validators.minLength(8), Validators.maxLength(8)])],
      nascimento: [null, Validators.required],
      cep: [null, Validators.required],
      logradouro: [null, Validators.required],
      complemento: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null, Validators.compose([Validators.email, Validators.required])]
    })
  }
  

}
