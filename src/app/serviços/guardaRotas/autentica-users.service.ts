import { funcionario } from './../../modelos/funcionario.model';
import { FuncionarioService } from './../funcionario.service';
import { Usuario } from './../../modelos/usuario.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticaUsersService {

  usuarioAutenticado : boolean = false
  fullAcess: boolean = false

  funcionario: funcionario = new funcionario

  constructor(
    private funcservice: FuncionarioService,
    private router :Router
  ) { }

  AutenticaUsuario(usuario:Usuario){

     this.funcservice.detalhesFuncionario(usuario.user)
     .subscribe(resposta=>{
       this.funcionario = resposta

       if(this.funcionario.matricula == usuario.user && this.funcionario.senha == usuario.password){
            this.usuarioAutenticado = true
            this.fullAcess = false
            this.router.navigate(['/home'])

            return true
        }else{
            this.fullAcess = false
            this.usuarioAutenticado = false
            return false
        }

     },erro=>{
       if(usuario.user == 'administrador' && usuario.password == '142508'){
              this.usuarioAutenticado = true
              this.fullAcess = true
              this.router.navigate(['/home'])
              return true
            }else{
                this.fullAcess = false
                this.usuarioAutenticado = false
                return false
            } 
     })
    
  }


  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }

  usuarioFullAcess(){
    return this.fullAcess
  }



}
