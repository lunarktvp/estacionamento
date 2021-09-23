import { Usuario } from './../../modelos/usuario.model';
import { AutenticaUsersService } from './../../serviços/guardaRotas/autentica-users.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {
    user: "",
    password:""
  }
  logando: boolean = false;

  constructor(
      private router: Router,
      private autenticausers: AutenticaUsersService
  ) { }

  ngOnInit(): void {

  }

  fazerLogin(){
    this.autenticausers.AutenticaUsuario(this.usuario)
    this.logando = !this.autenticausers.usuarioEstaAutenticado()
    
  }
 
}
