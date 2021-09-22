import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticaUsersService {

  usuarioAutenticado : boolean = false

  constructor(
    private router :Router
  ) { }

  AutenticaUsuario(usuario:any){
    console.log(usuario)

      if(usuario.matricula == 'administrador' && usuario.senha == '142508'){

        this.usuarioAutenticado = true
        this.router.navigate(['/home'])
        return true
      }else{

        this.usuarioAutenticado = false
        return false
      }

  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }



}
