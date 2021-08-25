import { Router} from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Empresa } from '../../../modelos/empresaModel'
import { EmpresaService } from 'src/app/services/empresa.service';



@Component({
  selector: 'cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {

  empresa: Empresa;
  formulario: FormGroup;
  titleButtonSubmite: any ="Gravar";
  gravar: boolean = false;

  constructor(
    private empService: EmpresaService,
    private formBuilder: FormBuilder,
    private router:Router,
    ) { }




  ngOnInit(): void {

    this.getEmpresas();

    this.formulario = this.formBuilder.group({
      id:[1],
      nome:[null,Validators.required],
      cnpj:[null,Validators.required],
      endereco:[null,Validators.required],
      telefone:[null,Validators.required],
      email:[null,[Validators.required, Validators.email]]
    });

    
  
  }

  onSubmit(){

      if(this.gravar){
        console.log("Alterando")
          this.empService.alterarEmpresa(this.formulario.value).subscribe(
            resposta=>{
            this.router.navigate(['cadEmpresa'])
          });
        }else{
          console.log("Criando")
          this.empService.cadastrarEmpresa(this.formulario.value).subscribe(resposta=>{
            this.formulario.reset();
            this.router.navigate(['cadEmpresa'])
          });
        }
      
  }  

  getEmpresas(){

    this.empService.detalheEmpresas(1).subscribe(empresa=>{
      this.empresa = empresa
      console.log(this.empresa)

      if(this.empresa?.nome!=null){
        this.titleButtonSubmite = "Alterar"
        this.gravar = true;
      }
    });
  }

  
}
