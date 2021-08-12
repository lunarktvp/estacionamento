import { Router} from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Empresa } from '../../modelos/empresaModel'
import { EmpresaService } from 'src/app/services/empresa.service';



@Component({
  selector: 'cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {

  empresa: any;

  formulario: FormGroup;

  constructor(
    private empService: EmpresaService,
    private formBuilder: FormBuilder,
    private router:Router,
    ) { }




  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome:[null,Validators.required],
      cnpj:[null,Validators.required],
      endereco:[null,Validators.required],
      telefone:[null,Validators.required],
      email:[null,[Validators.required, Validators.email]]
    });

    this.empService.getEmpresas().subscribe(resposta=>{
      this.empresa = resposta;
      console.log(this.empresa.cnpj);
    });
  
  }

  onSubmit(){

      this.empService.cadastrarEmpresa(this.formulario.value).subscribe(resposta=>{
        this.formulario.reset();
        this.router.navigate(['listarempresas'])
      });
      
  }  

  
}
