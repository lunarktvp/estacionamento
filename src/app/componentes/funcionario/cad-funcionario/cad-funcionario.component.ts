import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-funcionario',
  templateUrl: './cad-funcionario.component.html',
  styleUrls: ['./cad-funcionario.component.css']
})
export class CadFuncionarioComponent implements OnInit {

  constructor(
    private formbuilder: FormBuilder,
    private router:Router,
    //private funcservice: FuncionarioService,
    //private util: UtilidadesService,
    ) { }

  formulario: FormGroup;
  cep: any;
  ProximaMatricula: any;
  valido: boolean = true;

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

    /* this.funcservice.ProximaMatricula().subscribe(matricula=>{
     this.ProximaMatricula = matricula;
   });*/

    

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

  onSubmit(){

    /*this.funcservice.cadastrarFuncionario(this.formulario.value).subscribe(resposta=>{
      this.formulario.reset();
      this.router.navigate(['/ListFuncionarios']);
    });
    
   */
  }

  
   buscaCep(cep: any){
     /*this.util.buscaCep(cep).subscribe(resposta=>{
      this.endereco = resposta
      console.log(this.endereco.uf) 
     });
  */
    }
}
