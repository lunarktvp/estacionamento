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
    //private util: UtilidadesService,
    ) { }

  formulario: FormGroup;
  cep: any;
  ProximaMatricula: any;
  valido: boolean = true;
  id:any
  funcionario: funcionario

  endereco: any = {
    cep: "",
    logradouro: "",
    complemento: "",
    bairro:"",
    localidade:"",
    uf:"",
    ibge:"",
    gia:"",
    ddd:"",
    siafi:""

  }

  
    
  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      this.id = params['id']
    })

    this.detalhescliente(this.id)

  }

  onSubmit(){

    /*this.funcservice.cadastrarFuncionario(this.formulario.value).subscribe(resposta=>{
      this.formulario.reset();
      this.router.navigate(['/ListFuncionarios']);
    });
    
   */
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
      matricula: [null],
      nome: [null, Validators.required],
      cpf: [null, Validators.compose([Validators.required,Validators.minLength(8), Validators.maxLength(8)])],
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
  
   buscaCep(cep: any){
     /*this.util.buscaCep(cep).subscribe(resposta=>{
      this.endereco = resposta
      console.log(this.endereco.uf) 
     });
  */
    }

}
