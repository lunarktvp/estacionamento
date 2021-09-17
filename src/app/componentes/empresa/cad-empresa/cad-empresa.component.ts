import { Router } from '@angular/router';
import { EmpresaService } from './../../../serviços/empresas-services.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/modelos/empresa.model';

@Component({
  selector: 'app-cad-empresa',
  templateUrl: './cad-empresa.component.html',
  styleUrls: ['./cad-empresa.component.css']
})
export class CadEmpresaComponent implements OnInit {

  empresa: Empresa;
  formulario: FormGroup;
  titleButtonSubmite: any ="Gravar";
  gravar: boolean = false;

  constructor(
    private empService: EmpresaService,
    private formBuilder: FormBuilder,
    private router: Router,
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
          this.empService.alterarEmpresa(this.formulario.value).subscribe(
            resposta=>{
            this.router.navigate(['cadEmpresa'])
          });
        }else{
          this.empService.cadastrarEmpresa(this.formulario.value).subscribe(resposta=>{
            this.formulario.reset();
            this.router.navigate(['cadEmpresa'])
          });
        }
      
  }  

  getEmpresas(){

    this.empService.detalheEmpresas(1).subscribe(empresa=>{
      this.empresa = empresa

      if(this.empresa?.nome!=null){
        this.titleButtonSubmite = "Alterar"
        this.gravar = true;
      }
    });
  }

}
