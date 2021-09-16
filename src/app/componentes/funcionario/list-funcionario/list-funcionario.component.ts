import { FuncionarioService } from './../../../serviços/funcionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.css']
})
export class ListFuncionarioComponent implements OnInit {

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
