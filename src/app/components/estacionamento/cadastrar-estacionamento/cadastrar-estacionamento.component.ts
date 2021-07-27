import { EmpresaService } from './../../../services/empresa.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from 'src/app/modelos/estabelecimentoModel';
import { Empresa } from 'src/app/modelos/empresaModel';

@Component({
  selector: 'app-cadastrar-estacionamento',
  templateUrl: './cadastrar-estacionamento.component.html',
  styleUrls: ['./cadastrar-estacionamento.component.css']
})
export class CadastrarEstacionamentoComponent implements OnInit {

  estacionamento: Estabelecimento;
  formulario: FormGroup;
  empresas: any;

  constructor(
    private empresaService: EmpresaService,
    private formbuilder: FormBuilder,
    private route: Router,
  ) { }

  ngOnInit(): void {

    this.empresaService.getEmpresas().subscribe(empresa=>{
      this.empresas = empresa
    });

    this.formulario =this.formbuilder.group({
      nome:[null,Validators.required],
      endereco:[null, Validators.required]
    });
  }

  onSubmit(){

  }

}
