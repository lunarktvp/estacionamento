import { VeiculoService } from 'src/app/serviços/veiculo-services';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-veiculos',
  templateUrl: './cad-veiculos.component.html',
  styleUrls: ['./cad-veiculos.component.css']
})
export class CadVeiculoComponent implements OnInit {


  
  constructor(
    private formbuilder: FormBuilder,
    private veiculoservice: VeiculoService,
    private router: Router
    ) { }

  formulario: FormGroup;  

  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      tipoveiculo: [null, Validators.required],
      modelo: [null, Validators.required],
      placa: [null, Validators.required],
      cor: [null, Validators.required],
    })    
  }
  
  onSubmit(){

    console.log(this.formulario.value)
  

      this.veiculoservice.CadastrarVeiculo(this.formulario.value).subscribe(
          resposta=>{
              this.formulario.reset()
          }
      );

  }

}
