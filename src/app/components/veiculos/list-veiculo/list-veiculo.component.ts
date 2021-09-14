import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-list-veiculo',
  templateUrl: './list-veiculo.component.html',
  styleUrls: ['./list-veiculo.component.css'],
})
export class ListVeiculoComponent implements OnInit {

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private veiculoservice: VeiculoService,
    ) { }

  formulario: FormGroup;
  tipo: any;
  placa: any;

  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      idveiculo: [null],
      tipo: [null, Validators.required],
      placa: [null, Validators.compose([Validators.required,Validators.minLength(8), Validators.maxLength(8)])]
    })
  }

}

