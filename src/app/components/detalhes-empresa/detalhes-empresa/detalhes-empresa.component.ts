import { Empresa } from './../../../modelos/empresaModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'detalhes-empresa',
  templateUrl: './detalhes-empresa.component.html',
  styleUrls: ['./detalhes-empresa.component.css']
})
export class DetalhesEmpresaComponent implements OnInit {


  id: any;

 empresa:Empresa;
 formulario: FormGroup;

  constructor(
    public empService: EmpresaService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.detalheEmpresa(this.route.snapshot.params['id'])
    this.CriaFormulario()
   
    
  }

  detalheEmpresa(id:any){

    this.empService.detalheEmpresas(id).subscribe(empresa=>{
      this.empresa = empresa
      
      this.formulario = this.formBuilder.group({
        id: [this.empresa.id, Validators.required],
        nome:[this.empresa.nome,Validators.required],
        cnpj:[this.empresa.cnpj,Validators.required],
        endereco:[this.empresa.endereco,Validators.required],
        telefone:[this.empresa.telefone,Validators.required],
        email:[this.empresa.email,[Validators.required, Validators.email]]
      });
      
    }); 

  }

  CriaFormulario(){
    this.formulario = this.formBuilder.group({
      id: [null, Validators.required],
      nome:[null,Validators.required],
      cnpj:[null,Validators.required],
      endereco:[null,Validators.required],
      telefone:[null,Validators.required],
      email:[null,[Validators.required, Validators.email]]
    });
  }



  onSubmit(){
      this.empService.alterarEmpresa(this.formulario.value).subscribe(resposta=>{
        this.router.navigate(['listarempresas'])
      });
  }

  deletarEmpresa(){

    this.empService.deletarEmpresa(this.formulario.value).subscribe(empresa=>{
      console.log('deletada')
      this.router.navigate(['listarempresas'])
    });
  }

}
