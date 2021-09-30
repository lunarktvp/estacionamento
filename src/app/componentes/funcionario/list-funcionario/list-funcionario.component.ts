import { FuncionarioService } from './../../../serviços/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { funcionario } from 'src/app/modelos/funcionario.model';

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

  alterarSituacao(funcionario: funcionario){

    if(funcionario.situacao==9){
      funcionario.situacao = 0 
    }else{
      funcionario.situacao = 9
    }

    this.funcservice.alterarFuncionario(funcionario).subscribe()

  }


}
