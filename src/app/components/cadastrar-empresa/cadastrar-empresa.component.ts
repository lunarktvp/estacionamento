
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Empresa } from '../../modelos/empresaModel'
import { EmpresaService } from 'src/app/services/empresa.service';

//teste PHFS

@Component({
  selector: 'cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {

  empresa: Empresa;

  formulario: FormGroup;

  constructor(
    private empService: EmpresaService,
    private formBuilder: FormBuilder
    ) { }




  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome:[null,Validators.required],
      cnpj:[null,Validators.required],
      endereco:[null,Validators.required],
      telefone:[null,Validators.required],
      email:[null,[Validators.required, Validators.email]]
    });
  
  }

  onSubmit(){

      this.empService.cadastrarEmpresa(this.formulario.value).subscribe(resposta=>{
        this.formulario.reset();
      });
      
  }  

  
}
