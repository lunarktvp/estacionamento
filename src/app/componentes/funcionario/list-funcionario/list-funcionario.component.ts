import { FuncionarioService } from './../../../serviços/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.css']
})
export class ListFuncionarioComponent implements OnInit {

  funcionarios: any;

  constructor(
    public funcservice: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFuncionarios()
  }

  getFuncionarios(){
    this.funcservice.listFuncionarios().subscribe(funcionario=>{
      this.funcionarios = funcionario
    });
  }
  alterarSituacao(){
    this.funcionarios.situacao = 9
    this.funcionarios.cadastrarFuncionario(this.funcionarios)
    .subscribe((reposta: any)=>{
      this.router.navigate(['funcionario']);
    })
  }
  voltarSituacao(){
    this.funcionarios.situacao = 0
    this.funcionarios.cadastrarFuncionario(this.funcionarios)
    .subscribe((reposta: any)=>{
      this.router.navigate(['funcionario']);
    })
  }

}
