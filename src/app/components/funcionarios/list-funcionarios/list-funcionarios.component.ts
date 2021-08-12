import { funcionario } from './../../../modelos/funcionarioModel';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-list-funcionarios',
  templateUrl: './list-funcionarios.component.html',
  styleUrls: ['./list-funcionarios.component.css']
})
export class ListFuncionariosComponent implements OnInit {

  funcionarios: any;

  constructor(
    public funcservice: FuncionarioService
  ) { }

  ngOnInit(): void {
    this.getFuncionarios()
  }

  getFuncionarios(){
    this.funcservice.listFuncionarios().subscribe(funcionario=>{
      this.funcionarios = funcionario
    });
  }

}
