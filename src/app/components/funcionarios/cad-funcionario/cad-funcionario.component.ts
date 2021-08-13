import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { UtilidadesService } from 'src/app/services/utilidades.service';

@Component({
  selector: 'app-cad-funcionario',
  templateUrl: './cad-funcionario.component.html',
  styleUrls: ['./cad-funcionario.component.css']
})
export class CadFuncionarioComponent implements OnInit {

  constructor(
    private formbuilder: FormBuilder,
    private router:Router,
    private funcservice: FuncionarioService,
    private util: UtilidadesService,
    ) { }

  formulario: FormGroup;
  endereco: any;
  cep: any;
  ProximaMatricula: any;
    
  ngOnInit(): void {

   this.funcservice.ProximaMatricula().subscribe(matricula=>{
      this.ProximaMatricula = matricula;
   });

    

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

    this.funcservice.cadastrarFuncionario(this.formulario.value).subscribe(resposta=>{
      this.formulario.reset();
      this.router.navigate(['/ListFuncionarios']);
    });
    
   
  }

  
   buscaCep(){
     console.log("meu ovo")
     this.util.buscaCep(this.cep).subscribe(resposta=>{
      this.endereco = resposta
      console.log(resposta)
     });
   }


}
